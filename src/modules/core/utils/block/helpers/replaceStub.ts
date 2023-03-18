// Infrastructure
import Block from '../index';

export const executeComponent = (
  fragment: HTMLTemplateElement,
  component: Block,
): void => {
  const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);

  if (!stub) {
    return;
  }

  component.getContent()?.append(...Array.from(stub.childNodes));

  stub.replaceWith(component.getContent()!);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const replaceStubs = (
  fragment: HTMLTemplateElement,
  children: Record<string, Block<any> | Block<any>[]>,
): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(children).forEach(([_, component]) => {
    if (Array.isArray(component)) {
      component.forEach((item) => executeComponent(fragment, item));
    } else {
      executeComponent(fragment, component);
    }
  });
};

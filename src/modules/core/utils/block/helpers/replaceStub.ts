// Infrastructure
import Block from '../index';

// Other
import { ChildrenType } from '../types';

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

export const replaceStubs = (
  fragment: HTMLTemplateElement,
  children: ChildrenType,
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

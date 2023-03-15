import Block from '../index';

export const replaceStub = (
  fragment: HTMLTemplateElement,
  component: Block
): void => {
  const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);

  if (!stub) {
    return;
  }

  component.getContent()?.append(...Array.from(stub.childNodes));

  stub.replaceWith(component.getContent()!);
};

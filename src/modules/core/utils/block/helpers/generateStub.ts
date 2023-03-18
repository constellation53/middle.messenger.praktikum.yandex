// Core
import Block from '../index';

// Other
import { BlockType } from '../types';

export const generateStub = (
  context: BlockType,
  children: Record<string, Block | Block[]>,
): BlockType => {
  const contextAndStubs = { ...context };

  Object.entries(children).forEach(([key, childs]) => {
    if (Array.isArray(childs)) {
      contextAndStubs[key] = childs.map(
        (child) => `<div data-id="${child.id}"></div>`,
      );
    } else {
      contextAndStubs[key] = `<div data-id="${childs.id}"></div>`;
    }
  });

  return contextAndStubs;
};

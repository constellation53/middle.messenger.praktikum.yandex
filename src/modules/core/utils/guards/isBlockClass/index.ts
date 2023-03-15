import Block from '../../block';

export const isBlockClass = (component: unknown): component is Block<any> => {
  return component instanceof Block<any>;
};

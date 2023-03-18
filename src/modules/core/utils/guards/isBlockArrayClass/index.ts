// Infrastructure
import Block from '../../block';

export const isBlockClass = (
  component: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): component is Block<any> => component instanceof Block<any>;

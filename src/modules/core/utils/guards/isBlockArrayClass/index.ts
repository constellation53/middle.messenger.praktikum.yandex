// Core
import { Block } from '../../block';

// Other
import { isBlockClass } from '../isBlockClass';

export const isBlockArrayClass = (
  component: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): component is Block<any>[] => Array.isArray(component)
  && component.length > 0
  && component.every(isBlockClass);

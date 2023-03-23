// Other
import { ErrorType } from '../../validator/types';

export type ValidatorRuleType<T extends unknown[]> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute: (...args: T) => ErrorType;
};

// Other
import { ErrorType } from '../../validator/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValidatorRuleType<T extends unknown[] = any[]> = {
  execute: (...args: T) => ErrorType;
};

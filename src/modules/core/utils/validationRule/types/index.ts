// Other
import { ErrorType } from '../../validator/types';

export type ValidatorRuleType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute: (...args: any[]) => ErrorType;
};

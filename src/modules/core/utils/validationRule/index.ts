// Other
import { ValidatorRuleType } from './types';

export default class ValidationRule<
  A = unknown[],
  C = Record<string, string | number>,
> implements ValidatorRuleType {
  protected config;

  constructor(config?: C) {
    if (config) {
      this.config = config;
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  execute(...args: A): void {
    throw new Error(`Method not implemented. Arguments: ${args}`);
  }
}

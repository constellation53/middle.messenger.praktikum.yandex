// Other
import { ValidatorRuleType } from './types';

export default abstract class ValidationRule<
  A = unknown[],
  C = Record<string, string | number>,
> implements ValidatorRuleType<Array<A>> {
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

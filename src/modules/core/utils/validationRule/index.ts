// Other
import { ValidatorRuleType } from './types';

export default class ValidationRule<T = any> implements ValidatorRuleType {
  protected config;

  constructor(config?: T) {
    if (config) {
      this.config = config;
    }
  }

  execute(...args: any[]): void {
    throw new Error('Method not implemented.');
  }
}

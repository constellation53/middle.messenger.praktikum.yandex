// Other
import { ErrorType, ValidatorType } from './types';
import { ValidatorRuleType } from '../validationRule/types';

export abstract class Validator<K extends string> implements ValidatorType<K> {
  private validators: Map<K, ValidatorRuleType>;

  public errors: Map<K, ErrorType> = new Map<K, ErrorType>();

  protected constructor(validators: Map<K, ValidatorRuleType>) {
    this.validators = validators;
    validators.forEach((_, key) => {
      this.errors.set(key, { error: false });
    });
  }

  clear(): void {
    this.errors.clear();
  }

  getErrors(): Record<K, ErrorType> {
    return <Record<K, ErrorType>>Object.fromEntries(this.errors);
  }

  private getRule(type: K): ValidatorRuleType {
    const rule = this.validators.get(type);
    if (!rule) {
      throw new Error(`Rule not found for type:${type.toString()}`);
    }
    return rule!;
  }

  execute(field: K, ...args: unknown[]): void {
    const rule = this.getRule(field);

    const result = rule.execute(...args);
    if (result) {
      this.errors.set(field, result);
    }
  }
}

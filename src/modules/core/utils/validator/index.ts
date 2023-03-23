// Other
import { ErrorType, ExtendedType, ValidatorType } from './types';
import { ValidatorRuleType } from '../validationRule/types';

export abstract class Validator<T extends ExtendedType> implements ValidatorType<T> {
  private validators: Map<keyof T, ValidatorRuleType>;

  public errors: Map<keyof T, ErrorType> = new Map<keyof T, ErrorType>();

  protected constructor(validators: Map<keyof T, ValidatorRuleType>) {
    this.validators = validators;
    validators.forEach((_, key) => {
      this.errors.set(key, { error: false });
    });
  }

  clear(): void {
    this.errors.clear();
  }

  getErrors(): Record<keyof T, ErrorType> {
    return <Record<keyof T, ErrorType>>Object.fromEntries(this.errors);
  }

  private getRule(type: keyof T): ValidatorRuleType {
    const rule = this.validators.get(type);
    if (!rule) {
      throw new Error(`Rule not found for type:${type.toString()}`);
    }
    return rule!;
  }

  execute<K extends keyof T>(field: K, ...args: T[K]): void {
    const rule = this.getRule(field);

    const result: ErrorType = rule.execute(...args);

    if (result) {
      this.errors.set(field, result);
    }
  }
}

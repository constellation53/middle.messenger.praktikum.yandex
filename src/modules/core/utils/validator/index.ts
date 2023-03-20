// Other
import { ErrorType, ValidatorType } from './types';
import { ValidatorRuleType } from '../validationRule/types';

export abstract class Validator<T> implements ValidatorType<T> {
  private validators: Map<T, ValidatorRuleType>;

  private errors: ErrorType[] = [];

  protected constructor(validators: Map<T, ValidatorRuleType>) {
    this.validators = validators;
  }

  clear(): void {
    this.errors = [];
  }

  getErrors(): ErrorType[] {
    return this.errors;
  }

  private getRule(type: T): ValidatorRuleType {
    const rule = this.validators.get(type);
    if (!rule && typeof type === 'string') {
      throw new Error(`Rule not found for type:${type?.toString()}`);
    }

    return rule!;
  }

  execute(type: T, ...args: any[]): void {
    const rule = this.getRule(type);
    const result = rule.execute(args);
    if (result) {
      this.errors.push(result);
    }
  }
}

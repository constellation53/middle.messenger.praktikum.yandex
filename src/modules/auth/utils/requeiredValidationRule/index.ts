// Core
import ValidationRule from '../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../core/utils/validator/types';

export class RequiredValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const required = /^\S+$/;

    const rules: [RegExp, string][] = [
      [
        required,
        'Поле обязятельно',
      ],
    ];

    const result: ErrorType = { error: false };

    rules.forEach(([regex, message]) => {
      if (!regex.test(value)) {
        result.error = true;
        result.message = message;
      }
    });

    return result;
  }
}

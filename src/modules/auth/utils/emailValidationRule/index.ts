// Core
import ValidationRule from '../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../core/utils/validator/types';

export class EmailValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const rules: [RegExp, string][] = [
      [
        email,
        'Некорректный email',
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

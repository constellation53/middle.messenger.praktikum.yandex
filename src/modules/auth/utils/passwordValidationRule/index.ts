// Core
import ValidationRule from '../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../core/utils/validator/types';

export class PasswordValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(password: string): ErrorType {
    const symbols = /^(\S{6,})$/;

    const rules: [RegExp, string][] = [
      [
        symbols,
        'Пароль должен состоять как минимум из 6 символов (пробелы запрещены)',
      ],
    ];

    const result: ErrorType = { error: false };

    rules.forEach(([regex, message]) => {
      if (!regex.test(password)) {
        result.error = true;
        result.message = message;
      }
    });

    return result;
  }
}

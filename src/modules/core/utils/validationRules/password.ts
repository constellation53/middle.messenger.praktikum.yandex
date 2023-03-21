// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';

export class Password extends ValidationRule {
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

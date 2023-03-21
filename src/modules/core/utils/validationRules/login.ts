// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';

export class Login extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const symbols = /^[\w\d]+$/;
    const minChar = /^[\w\d]{4,}$/;

    const rules: [RegExp, string][] = [
      [
        symbols,
        'Логин должен состоять только из английских букв и цифр',
      ],
      [
        minChar,
        'Логин должен состоять как минимум из 4 символов',
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

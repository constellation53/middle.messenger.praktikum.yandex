// Core
import ValidationRule from '../../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../../core/utils/validator/types';

export class LoginValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const symbols = /^[A-Za-z][A-Za-z0-9]*$/;
    const minChar = /^[0-9a-zA-Z]{4,}$/;

    const rules: [RegExp, string][] = [
      [
        symbols,
        'Логин должен состоять только из английских букв и цифр',
      ],
      [
        minChar,
        'Логин должен состоять как минимум из английских 4',
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

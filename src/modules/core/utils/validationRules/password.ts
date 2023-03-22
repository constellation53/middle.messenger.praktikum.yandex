// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

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

    return getError(password, rules);
  }
}

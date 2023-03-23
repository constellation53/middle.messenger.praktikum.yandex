// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

export class Login extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const minChar = /^.{3,}$/;
    const maxChar = /^.{3,20}$/;
    const latin = /[A-Za-z]+/;
    const latinAndNumber = /^[A-Za-z0-9-_]+$/;

    const rules: [RegExp, string][] = [
      [
        minChar,
        'Минимальное количество символов - 3',
      ],
      [
        maxChar,
        'Максимальное количество символов - 20',
      ],
      [
        latinAndNumber,
        'Разрешерна только латиница и цифры, нет спецсиволов (допустим только - и _)',
      ],
      [
        latin,
        'Необходима хотя бы одна латинская буква',
      ],
    ];

    return getError(value, rules);
  }
}

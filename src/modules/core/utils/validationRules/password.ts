// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

export class Password extends ValidationRule<[string]> {
  constructor() {
    super();
  }

  execute(password: string): ErrorType {

    const minChar = /^.{8,}$/;
    const maxChar = /^.{8,40}$/;
    const atLeastOneCapitalLetter = /(?=.*[A-Z])/;
    const atLeastOneNumber = /(?=.*\d)/;

    const rules: [RegExp, string][] = [
      [
        minChar,
        'Минимальное количество символов - 8',
      ],
      [
        maxChar,
        'Максимальное количество символов - 40',
      ],
      [
        atLeastOneCapitalLetter,
        'Требуется хотя бы одна заглавная буква',
      ],
      [
        atLeastOneNumber,
        'Требуется хотя бы одно число',
      ],
    ];

    return getError(password, rules);
  }
}

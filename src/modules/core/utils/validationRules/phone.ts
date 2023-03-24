// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

export class Phone extends ValidationRule<[string]> {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const phone = /^\+?\d+$/;
    const minChar = /^.{10,}$/;
    const maxChar = /^.{10,15}$/;

    const rules: [RegExp, string][] = [
      [
        phone,
        'Поле должно состоять из цифр, может начинается с плюса.',
      ],
      [
        minChar,
        'Минимальное количество символов - 10',
      ],
      [
        maxChar,
        'Максимальное количество символов - 15',
      ],
    ];

    return getError(value, rules);
  }
}

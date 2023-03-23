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
    const phone = /^\+?\d{10,15}$/;

    const rules: [RegExp, string][] = [
      [
        phone,
        'Поле должно быть 10 до 15 символов, состоит из цифр, может начинается с плюса.',
      ],
    ];

    return getError(value, rules);
  }
}

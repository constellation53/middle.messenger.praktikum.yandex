// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

export class Email extends ValidationRule<[string]> {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const rules: [RegExp, string][] = [
      [
        email,
        'Некорректный email!',
      ],
    ];

    return getError(value, rules);
  }
}

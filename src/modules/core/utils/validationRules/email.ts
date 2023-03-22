// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

export class Email extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const rules: [RegExp, string][] = [
      [
        email,
        'Некорректный email',
      ],
    ];

    return getError(value, rules);
  }
}

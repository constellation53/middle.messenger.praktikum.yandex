// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

export class Required extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const required = /^\S+$/;

    const rules: [RegExp, string][] = [
      [
        required,
        'Поле обязятельно',
      ],
    ];

    return getError(value, rules);
  }
}

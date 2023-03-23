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
        'Разрешена латиница, цифры и спецсимволы: .,_,%+-, обязательна '
        + '@ и точка после неё, перед точкой обязательно должны быть буквы',
      ],
    ];

    return getError(value, rules);
  }
}

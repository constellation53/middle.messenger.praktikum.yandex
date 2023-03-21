// Core
import ValidationRule from '../../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../../core/utils/validator/types';

export class LoginValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const lettersRegex = /^[A-Za-z][A-Za-z0-9]*$/;

    if (!lettersRegex.test(value)) {
      return { error: true, message: 'Email должен состоять только из английских букв и цифр' };
    }

    return { error: false };
  }
}

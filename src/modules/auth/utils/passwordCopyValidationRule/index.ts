// Core
import ValidationRule from '../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../core/utils/validator/types';

export class PasswordCopyValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(password: string, oldPassword: string): ErrorType {
    const areEqual = password === oldPassword;

    if (areEqual) {
      return { error: false };
    }

    return { error: true, message: 'Пароли не совпадают' };
  }
}

// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';

export class PasswordCopy extends ValidationRule {
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

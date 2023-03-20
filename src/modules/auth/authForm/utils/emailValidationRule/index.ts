// Core
import ValidationRule from '../../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../../core/utils/validator/types';

export class EmailValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(regex)) {
      return { error: false };
    }
    return { error: true, message: 'Invalid email' };
  }
}

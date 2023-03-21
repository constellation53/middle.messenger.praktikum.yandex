// Core
import ValidationRule from '../../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../../core/utils/validator/types';

export class EmailValidationRule extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(regex)) {
      return { error: false };
    }
    return { error: true, message: 'Invalid email' };
  }
}

// Core
import ValidationRule from '../../../../../core/utils/validationRule';

// Other
import { ErrorType } from '../../../../../core/utils/validator/types';

export class Avatar extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: File): ErrorType {
    if (value) {
      return { error: false };
    }

    return {
      error: true,
      message: 'Аватар должен быть заполнен',
    };
  }
}

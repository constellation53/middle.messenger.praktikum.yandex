// Core
import { Validator } from '../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../core/utils/validationRule/types';
import { EmailValidationRule } from '../emailValidationRule';
import { LoginValidationRule } from '../loginValidationRule';

type ValidationType = 'email' | 'login';
export class AuthValidator extends Validator<ValidationType> {
  constructor() {
    const validators = new Map<ValidationType, ValidatorRuleType>([
      [
        'email',
        new EmailValidationRule(),
      ],
      [
        'login',
        new LoginValidationRule(),
      ],
    ]);

    super(validators);
  }
}

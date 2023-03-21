// Core
import { Validator } from '../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../core/utils/validationRule/types';
import { EmailValidationRule } from '../emailValidationRule';
import { LoginValidationRule } from '../loginValidationRule';
import { FieldsType } from '../../types';
import { PasswordValidationRule } from '../passwordValidationRule';

export class AuthValidator extends Validator<FieldsType> {
  constructor() {
    const validators = new Map<FieldsType, ValidatorRuleType>([
      [
        'email',
        new EmailValidationRule(),
      ],
      [
        'login',
        new LoginValidationRule(),
      ],
      [
        'password',
        new PasswordValidationRule(),
      ],
    ]);

    super(validators);
  }
}

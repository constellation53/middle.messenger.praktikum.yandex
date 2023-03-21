// Core
import { Validator } from '../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../core/utils/validationRule/types';
import { EmailValidationRule } from '../emailValidationRule';
import { LoginValidationRule } from '../loginValidationRule';
import { PasswordValidationRule } from '../passwordValidationRule';
import { PasswordCopyValidationRule } from '../passwordCopyValidationRule';
import { RequiredValidationRule } from '../requeiredValidationRule';
import { FieldsType } from '../../types';

export class RegistrationValidator extends Validator<FieldsType> {
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
        'first_name',
        new RequiredValidationRule(),
      ],
      [
        'password',
        new PasswordValidationRule(),
      ],
      [
        'passwordCopy',
        new PasswordCopyValidationRule(),
      ],
    ]);

    super(validators);
  }
}

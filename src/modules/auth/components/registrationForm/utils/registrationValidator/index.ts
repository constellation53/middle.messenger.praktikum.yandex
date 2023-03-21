// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { EmailValidationRule } from '../../../../utils/emailValidationRule';
import { LoginValidationRule } from '../../../../utils/loginValidationRule';
import { PasswordValidationRule } from '../../../../utils/passwordValidationRule';
import { PasswordCopyValidationRule } from '../../../../utils/passwordCopyValidationRule';
import { RequiredValidationRule } from '../../../../utils/requeiredValidationRule';
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

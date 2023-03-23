// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { Email } from '../../../../../core/utils/validationRules/email';
import { Password } from '../../../../../core/utils/validationRules/password';
import { PasswordCopy } from '../../../../../core/utils/validationRules/passwordCopy';
import { Login } from '../../../../../core/utils/validationRules/login';
import { FieldsType } from '../../types';
import { Name } from '../../../../../core/utils/validationRules/name';

export class RegistrationValidator extends Validator<FieldsType> {
  constructor() {
    const validators = new Map<FieldsType, ValidatorRuleType>([
      [
        'email',
        new Email(),
      ],
      [
        'login',
        new Login(),
      ],
      [
        'first_name',
        new Name(),
      ],
      [
        'second_name',
        new Name(),
      ],
      [
        'password',
        new Password(),
      ],
      [
        'passwordCopy',
        new PasswordCopy(),
      ],
    ]);

    super(validators);
  }
}

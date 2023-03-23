// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { ValidatorType } from '../../types';
import { Email } from '../../../../../core/utils/validationRules/email';
import { Password } from '../../../../../core/utils/validationRules/password';
import { PasswordCopy } from '../../../../../core/utils/validationRules/passwordCopy';
import { Login } from '../../../../../core/utils/validationRules/login';
import { Name } from '../../../../../core/utils/validationRules/name';
import { Phone } from '../../../../../core/utils/validationRules/phone';

export class RegistrationValidator extends Validator<ValidatorType> {
  constructor() {
    const validators = new Map<keyof ValidatorType, ValidatorRuleType>([
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
        'phone',
        new Phone(),
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

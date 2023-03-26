// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { ValidatorType } from '../../types';
import { Password } from '../../../../../core/utils/validationRules/password';
import { PasswordCopy } from '../../../../../core/utils/validationRules/passwordCopy';

export class PasswordValidator extends Validator<ValidatorType> {
  constructor() {
    const validators = new Map<keyof ValidatorType, ValidatorRuleType>([
      [
        'newPassword',
        new Password(),
      ],
      [
        'oldPassword',
        new Password(),
      ],
      [
        'repeatNewPassword',
        new PasswordCopy(),
      ],
    ]);

    super(validators);
  }
}

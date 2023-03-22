// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { FieldsType } from '../../types';
import { Password } from '../../../../../core/utils/validationRules/password';
import { PasswordCopy } from '../../../../../core/utils/validationRules/passwordCopy';

export class PasswordValidator extends Validator<FieldsType> {
  constructor() {
    const validators = new Map<FieldsType, ValidatorRuleType>([
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

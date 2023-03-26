// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { FieldsType, ValidatorType } from '../../types';
import { Login } from '../../../../../core/utils/validationRules/login';
import { Password } from '../../../../../core/utils/validationRules/password';

export class AuthValidator extends Validator<ValidatorType> {
  constructor() {
    const validators = new Map<FieldsType, ValidatorRuleType>([
      [
        'login',
        new Login(),
      ],
      [
        'password',
        new Password(),
      ],
    ]);

    super(validators);
  }
}

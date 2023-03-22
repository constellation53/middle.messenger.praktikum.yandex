// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { Email } from '../../../../../core/utils/validationRules/email';
import { Login } from '../../../../../core/utils/validationRules/login';
import { Required } from '../../../../../core/utils/validationRules/requeired';
import { FieldsType } from '../../types';

export class InfoValidator extends Validator<FieldsType> {
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
        new Required(),
      ],
      [
        'display_name',
        new Required(),
      ],
    ]);

    super(validators);
  }
}

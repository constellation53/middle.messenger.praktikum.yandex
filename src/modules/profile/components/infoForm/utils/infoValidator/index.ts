// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { Email } from '../../../../../core/utils/validationRules/email';
import { Login } from '../../../../../core/utils/validationRules/login';
import { Required } from '../../../../../core/utils/validationRules/requeired';
import { ValidatorType } from '../../types';
import { Name } from '../../../../../core/utils/validationRules/name';
import { Phone } from '../../../../../core/utils/validationRules/phone';

export class InfoValidator extends Validator<ValidatorType> {
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
        'display_name',
        new Required(),
      ],
      [
        'phone',
        new Phone(),
      ],
    ]);

    super(validators);
  }
}

// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { ValidatorType } from '../../types';
import { Avatar } from '../validationRules/avatar';

export class AvatarValidator extends Validator<ValidatorType> {
  constructor() {
    const validators = new Map<keyof ValidatorType, ValidatorRuleType>([
      [
        'avatar',
        new Avatar(),
      ],
    ]);

    super(validators);
  }
}

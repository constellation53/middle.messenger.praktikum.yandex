// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { FieldsType } from '../../types';
import { Avatar } from '../validationRules/avatar';

export class AvatarValidator extends Validator<FieldsType> {
  constructor() {
    const validators = new Map<FieldsType, ValidatorRuleType>([
      [
        'avatar',
        new Avatar(),
      ],
    ]);

    super(validators);
  }
}

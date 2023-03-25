// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { Required } from '../../../../../core/utils/validationRules/requeired';
import { FieldsType, ValidatorType } from '../../types';

export class MessageValidator extends Validator<ValidatorType> {
  constructor() {
    const validators = new Map<FieldsType, ValidatorRuleType>([
      [
        'message',
        new Required(),
      ],
    ]);

    super(validators);
  }
}

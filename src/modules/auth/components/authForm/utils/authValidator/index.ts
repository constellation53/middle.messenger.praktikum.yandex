// Core
import { Validator } from '../../../../../core/utils/validator';

// Other
import { ValidatorRuleType } from '../../../../../core/utils/validationRule/types';
import { FieldsType } from '../../types';
import { LoginValidationRule } from '../../../../utils/loginValidationRule';

export class AuthValidator extends Validator<FieldsType> {
  constructor() {
    const validators = new Map<FieldsType, ValidatorRuleType>([
      [
        'login',
        new LoginValidationRule(),
      ],
    ]);

    super(validators);
  }
}

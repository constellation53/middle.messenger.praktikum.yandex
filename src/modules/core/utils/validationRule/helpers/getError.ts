// Other
import { ErrorType } from '../../validator/types';

export const getError = (value: string, rules: [RegExp, string][]): ErrorType => {
  const result: ErrorType = { error: false };

  for (let i = 0; i < rules.length; i++) {
    const [rule, message] = rules[i];
    if (!rule.test(value)) {
      result.error = true;
      result.message = message;
      break;
    }
  }

  return result;
};

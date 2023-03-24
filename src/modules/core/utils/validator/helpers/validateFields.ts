// Elements
import { Input } from '../../../elements/input';

// Other
import { ErrorType } from '../types';

export const validateFields = (
  fields: Record<string, Input>,
  errors: Record<string, ErrorType>,
): void => {
  Object.entries(errors).forEach(([field, error]) => {
    const input = field in fields ? fields[field] : null;

    input?.setProps({ validation: error });
  });
};

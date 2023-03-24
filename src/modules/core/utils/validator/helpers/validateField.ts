// Elements
import { Input } from '../../../elements/input';

// Other
import { ErrorType } from '../types';

export const validateField = (
  field: string,
  fields: Record<string, Input>,
  errors: Record<string, ErrorType>,
): void => {
  const error = errors[field];

  const input = field in fields ? fields[field] : null;

  input?.setProps({ validation: error });
};

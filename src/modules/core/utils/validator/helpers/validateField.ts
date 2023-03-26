// Elements
import { Input } from '../../../elements/input';

// Other
import { ErrorType } from '../types';

export const validateField = <K extends string>(
  field: K,
  fields: Record<K, Input>,
  errors: Record<K, ErrorType>,
): void => {
  const error = errors[field];

  const input = field in fields ? fields[field] : null;

  input?.setProps({ validation: error });
};

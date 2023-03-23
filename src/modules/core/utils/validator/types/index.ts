export type ExtendedType = Record<string, unknown[]>;

export type ValidatorType<T extends ExtendedType> = {
  execute: <K extends keyof T>(field: K, ...args: T[K]) => void;
};

export type ErrorType = {
  error: boolean;
  message?: string;
};

export type FieldsType<K extends string> = {
  [key in K]: string;
};

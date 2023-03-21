export type ValidatorType<T> = {
  execute: (type: T, ...args: any[]) => any;
};

export type ErrorType = {
  error: boolean;
  message?: string;
};

export type FieldsType<K extends string> = {
  [key in K]: unknown[]
};

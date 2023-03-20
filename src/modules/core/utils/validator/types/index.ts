export type ValidatorType<T> = {
  execute: (type: T, ...args: any[]) => any;
};

export type ErrorType = {
  error: boolean;
  message?: string;
};

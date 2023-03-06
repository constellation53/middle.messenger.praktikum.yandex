export type ListenersStateType<T> = Partial<{
  [Key in keyof T]: T[Key][];
}>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseGenericType = Record<string, (...args: any[]) => any>;

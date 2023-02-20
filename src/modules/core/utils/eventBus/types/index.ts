export type ListenersStateType<T> = Partial<{
  [Key in keyof T]: T[Key][];
}>

export type BaseGenericType = Record<string, (...args: any[]) => any>;

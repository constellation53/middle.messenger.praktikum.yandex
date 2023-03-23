type ListenersType<T> = {
  [Key in keyof T]: T[Key][];
};

export type ListenersStateType<T> = Partial<ListenersType<T>>;

export type EventBusType = Record<string, (...args: any[]) => void>;

export type EventBusHandlerType<T, K extends keyof T> =
// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
  T[K] extends (...args: infer A) => any ? A : never[];

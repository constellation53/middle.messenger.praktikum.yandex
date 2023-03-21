export type ListenersStateType<T> = Partial<{
  [Key in keyof T]: T[Key][];
}>;

export type EventBusType = Record<string, (...args: unknown[]) => void>;

export type EventBusHandlerType<T, K extends keyof T> =
// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
  T[K] extends (...args: infer A) => any ? A : never[];

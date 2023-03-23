export type ExtendedType = Record<string, unknown[]>;
export type HandlerType<T extends ExtendedType, K extends keyof T> = (...args: T[K]) => void;

export type ListenersType<T extends ExtendedType> = {
  [K in keyof T]?: Array<HandlerType<T, K>>;
};

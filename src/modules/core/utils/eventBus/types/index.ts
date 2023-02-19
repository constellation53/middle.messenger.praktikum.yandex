export type ListenersType = {
  myEvent: (arg: string) => void;
  reset: (arg: string, b: number) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;

export type EventsType = keyof ListenersType;

export type ListenersStateType = {
  [K in EventsType]?: ListenersType[K][];
}

export type OnEventType = <T extends EventsType>(event: T, callback: ListenersType[T]) => void;
export type OffEventType = <T extends EventsType>(event: T, callback: ListenersType[T]) => void;

type EmitEventType = <T extends EventsType>(
  event: T,
  ...args: ArgumentTypes<ListenersType[T]>
) => void;

export interface EventBusI {
  listeners: ListenersStateType;
  on: OnEventType;
  off: OffEventType;
  emit: EmitEventType;
}

export type ListenersType = Record<string, Function[]>;

export interface EventBusI {
  listeners: ListenersType;
  on: (event: string, callback: Function) => void;
}

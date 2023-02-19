import {
  EventBusI,
  EventsType,
  ListenersStateType,
  ListenersType,
  ArgumentTypes
} from './types';

export class EventBus implements EventBusI {
  listeners: ListenersStateType;

  constructor() {
    this.listeners = {};
  }

  on = <T extends EventsType>(event: T, callback: ListenersType[T]): void => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    if (this.listeners[event]) {
      this.listeners[event]!.push(callback);
    }
  };

  off = <T extends EventsType>(event: T, callback: ListenersType[T]): void => {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback
    ) as ListenersStateType[T];
  };

  emit = <T extends EventsType>(
    event: T,
    ...args: ArgumentTypes<ListenersType[T]>
  ): void => {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event]!.forEach((callback) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callback(...(args as const));
    });
  };
}

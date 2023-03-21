// Other
import { isString } from '../guards/isString';
import { EventBusHandlerType, EventBusType, ListenersStateType } from './types';

export class EventBus<T = EventBusType> {
  listeners: ListenersStateType<T>;

  constructor() {
    this.listeners = {};
  }

  on = <Event extends keyof T>(event: Event, callback: T[Event]): void => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    if (this.listeners[event]) {
      this.listeners[event]!.push(callback);
    }
  };

  off = <Event extends keyof T>(event: Event, callback: T[Event]): void => {
    if (isString(event) && !this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback,
    );
  };

  emit = <Event extends keyof T>(
    event: Event,
    ...args: EventBusHandlerType<T, Event>
  ): void => {
    if (isString(event) && !this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]!.forEach((callback) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      callback(...(args as const));
    });
  };
}

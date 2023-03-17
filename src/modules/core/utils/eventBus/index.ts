import { isString } from '../guards/isString';
import { BaseGenericType, ListenersStateType } from './types';

export class EventBus<T = BaseGenericType> {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: T[Event] extends (...args: infer A) => any ? A : never[]
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

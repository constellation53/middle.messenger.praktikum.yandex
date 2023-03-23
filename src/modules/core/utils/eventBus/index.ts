// Other
import { isString } from '../guards/isString';
import { HandlerType, ExtendedType, ListenersType } from './types';

export class EventBus<T extends ExtendedType> {
  listeners: ListenersType<T> = {};

  constructor() {
    this.listeners = {};
  }

  on = <E extends keyof T>(event: E, callback: HandlerType<T, E>): void => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    if (this.listeners[event]) {
      this.listeners[event]!.push(callback);
    }
  };

  off = <E extends keyof T>(event: E, callback: HandlerType<T, E>): void => {
    if (isString(event) && !this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback,
    );
  };

  emit = <E extends keyof T>(
    event: E,
    ...args: T[E]
  ): void => {
    if (isString(event) && !this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]!.forEach((callback) => {
      callback(...args);
    });
  };
}

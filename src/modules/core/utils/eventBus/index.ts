import { EventBusI, ListenersType } from './types';

// TODO: typing
export class EventBus implements EventBusI {
  listeners: ListenersType = {};

  on = (event: string, callback: any) => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  };

  off = (event: string, callback: any) => {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]
      .filter((listener) => listener !== callback);
  }

  emit = (event: string, ...args: unknown[]) => {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((callback) => callback(...args));
  };
}

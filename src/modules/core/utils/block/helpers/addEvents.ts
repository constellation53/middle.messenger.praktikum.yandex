// Other
import { EventHandlerType, EventsType } from '../types';

export const addEvents = (
  element: HTMLElement,
  events: EventsType,
): void => {
  const tuple = Object.entries<EventHandlerType>(events);

  tuple.forEach(([name, listener]) => {
    element.addEventListener(<keyof HTMLElementEventMap>name, listener);
  });
};

// Other
import { EventHandlerType, EventsType } from '../types';

export const removeEvents = (
  element: HTMLElement,
  events: EventsType,
): void => {
  const tuple = Object.entries<EventHandlerType>(events);

  tuple.forEach(([name, listener]) => {
    element?.removeEventListener(<keyof HTMLElementEventMap>name, listener);
  });
};

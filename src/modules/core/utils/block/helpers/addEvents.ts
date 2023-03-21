// Other
import { EventHandlerType, EventsType } from '../types';

export const addEvents = (
  element: HTMLElement,
  events: EventsType,
): void => {
  const tuple = <[keyof HTMLElementEventMap, EventHandlerType<keyof HTMLElementEventMap>][]>
    Object.entries(events);

  tuple.forEach(([name, listener]) => {
    element.addEventListener(name, listener);
  });
};

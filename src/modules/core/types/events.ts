export type HTMLInputEventType = {
  target: HTMLInputElement & EventTarget;
} & Event;

export type HTMLElementEventType = {
  target: HTMLElement & EventTarget;
} & Event;

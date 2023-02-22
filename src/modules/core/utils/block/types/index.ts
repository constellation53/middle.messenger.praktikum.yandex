export enum EventEnum {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:render',
}

export type ListenersType = {
  [EventEnum.INIT]: (...args: any[]) => void;
  [EventEnum.FLOW_CDM]: (...args: any[]) => void;
  [EventEnum.FLOW_RENDER]: (...args: any[]) => void;
}

export type MetaType<T> = {
  tagName: string;
  props: T;
}

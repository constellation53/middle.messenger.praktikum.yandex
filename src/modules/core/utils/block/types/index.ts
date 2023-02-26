export enum EventEnum {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:render',
  FLOW_CDU = 'flow:component-did-update',
}

export type ListenersType = {
  [EventEnum.INIT]: (...args: any[]) => void;
  [EventEnum.FLOW_CDM]: (...args: any[]) => void;
  [EventEnum.FLOW_RENDER]: (...args: any[]) => void;
  [EventEnum.FLOW_CDU]: (...args: any[]) => void;
}

export type MetaType<T> = {
  tagName: string;
  props: T;
}

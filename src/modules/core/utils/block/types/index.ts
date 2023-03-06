export enum EventEnum {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:render',
  FLOW_CDU = 'flow:component-did-update',
}

export type ListenersType = {
  [EventEnum.INIT]: () => void;
  [EventEnum.FLOW_CDM]: () => void;
  [EventEnum.FLOW_CDU]: (...args: unknown[]) => void;
  [EventEnum.FLOW_RENDER]: () => void;
};

export type MetaType<T> = {
  tagName: string;
  props: T;
};

export type CoreBlockType<T> = T & {
  settings?: {
    withInternalID?: boolean;
  };
};

export enum EventEnum {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:render',
  FLOW_CDU = 'flow:component-did-update',
}

export type ListenersType<P> = {
  [EventEnum.INIT]: () => void;
  [EventEnum.FLOW_CDM]: () => void;
  [EventEnum.FLOW_CDU]: (oldProp: P, newProp: P) => void;
  [EventEnum.FLOW_RENDER]: () => void;
};

export type MetaType<T> = {
  tagName: string;
  props: T;
};

export type CoreBlockType<T> = T & {
  // eslint-disable-next-line @typescript-eslint/ban-types
  events?: Record<string, Function>;
  settings?: {
    withInternalID?: boolean;
  };
};

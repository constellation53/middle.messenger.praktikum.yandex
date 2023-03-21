// Core
import { Block } from '../index';
import { EventBus } from '../../eventBus';

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

export type EventHandlerType<K extends keyof HTMLElementEventMap> =
  (event: HTMLElementEventMap[K]) => void;

// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
export type EventsType = {
  [Key in keyof HTMLElementEventMap]?: EventHandlerType<Key>
};

type SettingsType = {
  withInternalID?: boolean;
};

export type CoreBlockType<T> = T & {
  eventTarget?: string;
  events?: EventsType;
  settings?: SettingsType;
};

export type ChildrenType = Record<string, Block | Block[]>;

export type BlockEventBusType<P> = () => EventBus<ListenersType<P>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlockType = CoreBlockType<Record<string, any>>;

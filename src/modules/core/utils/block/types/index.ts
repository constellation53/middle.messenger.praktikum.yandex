// Core
import { Block } from '../index';
import { EventBus } from '../../eventBus';

export enum EventEnum {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_RENDER = 'flow:render',
  FLOW_CDU = 'flow:component-did-update',
}

export type ListenersType<P = any> = {
  [EventEnum.INIT]: [];
  [EventEnum.FLOW_CDM]: [];
  [EventEnum.FLOW_CDU]: [P, P];
  [EventEnum.FLOW_RENDER]: [];
};

export type MetaType<T> = {
  tagName: string;
  props: T;
};

export type EventHandlerType<K extends keyof HTMLElementEventMap> =
  (event: HTMLElementEventMap[K]) => void;

export type EventsType = {
  [Key in keyof HTMLElementEventMap]?: EventHandlerType<Key>
};

type SettingsType = {
  withInternalID?: boolean;
};

export type ExtendedType = Record<string, unknown>;

export type PropsType<T extends ExtendedType> = T & {
  eventTarget?: string;
  events?: EventsType;
  settings?: SettingsType;
};

export type ChildrenBaseType<K extends string = string> = Record<K, Block | Block[]>;

export type ChildrenType<C extends ChildrenBaseType> = {
  [K in keyof C]: C[K];
};

export type BlockType = PropsType<Record<string, unknown>>;

export type EventBusType<P extends BlockType> = EventBus<ListenersType<PropsType<P>>>;
export type EventBusFuncType<P extends BlockType> = () => EventBusType<P>;

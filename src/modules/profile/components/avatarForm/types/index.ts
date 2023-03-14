export enum EventEnum {
  FLOW_CHOOSE_FILE_CLICK = 'flow:choose-file-click',
  FLOW_FILE_CHOSEN = 'flow:choose-file-chosen',
}

export type ListenersType = {
  [EventEnum.FLOW_CHOOSE_FILE_CLICK]: () => void;
  [EventEnum.FLOW_FILE_CHOSEN]: () => void;
};

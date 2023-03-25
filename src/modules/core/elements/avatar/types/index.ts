import { EventHandlerType } from '../../../utils/block/types';

type SizeNameType = 'small' | 'medium';

type SizeType = Partial<Record<SizeNameType, boolean>>;

type EventsType = {
  click: EventHandlerType<'click'>
};

export type AvatarType = {
  imgSrc?: string | null;
  editable?: boolean;
  alt?: string;
  events?: EventsType;
} & SizeType;

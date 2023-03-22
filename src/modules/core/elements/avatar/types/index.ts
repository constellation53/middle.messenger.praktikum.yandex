type SizeNameType = 'small' | 'medium';

type SizeType = Partial<Record<SizeNameType, boolean>>;

export type AvatarType = {
  imgSrc?: string | null;
  editable?: boolean;
  alt?: string;
} & SizeType;

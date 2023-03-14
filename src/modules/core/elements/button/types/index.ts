type AlignNameType = 'alignLeft';
type VariantNameType = 'primary' | 'secondary' | 'tertiary';

type VariantType = Partial<Record<VariantNameType, boolean>>;

type AlignType = Partial<Record<AlignNameType, boolean>>;

type EventsType = {
  click?: (event: Event) => void;
};

type CoreType = {
  text: string;
  class?: string;
  fluid?: boolean;
  underline?: boolean;
} & VariantType &
  AlignType;

type LinkButtonType = CoreType & {
  href: string;
};

type StandardButtonType = CoreType & {
  href?: string;
  htmlType?: string;
  events?: EventsType;
};

export type ButtonType = LinkButtonType | StandardButtonType;

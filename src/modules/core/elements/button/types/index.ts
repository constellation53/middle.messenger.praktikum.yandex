type AlignNameType = 'alignLeft';
type VariantNameType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

type VariantType = Partial<Record<VariantNameType, boolean>>;

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Pick<T, K> & Partial<Record<Exclude<Keys, K>, never>>;
  }[Keys];

type AlignType = Partial<Record<AlignNameType, boolean>>;

type EventsType = {
  click?: (event: Event) => void;
};

type CoreType = {
  text: string;
  class?: string;
  fluid?: boolean;
  underline?: boolean;
} & RequireOnlyOne<VariantType> &
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

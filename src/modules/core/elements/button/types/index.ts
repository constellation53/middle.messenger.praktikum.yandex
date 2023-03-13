type AlignNameType = 'alignLeft';
type VariantNameType = 'primary' | 'secondary' | 'tertiary';

type VariantType = Partial<Record<VariantNameType, boolean>>;

type AlignType = Partial<Record<AlignNameType, boolean>>;

type CoreType = {
  text: string;
  class?: string;
  fluid?: boolean;
} & VariantType &
  AlignType;

type LinkButtonType = CoreType & {
  href: string;
};

type StandardButtonType = CoreType & {
  href?: string;
  htmlType?: string;
};

export type ButtonType = LinkButtonType | StandardButtonType;

type AlignNameType = 'alignLeft';
type VariantNameType = 'primary' | 'secondary' | 'tertiary';


type VariantType = Partial<Record<VariantNameType, boolean>>;

type AlignType = Partial<Record<AlignNameType, boolean>>;

type CoreType = {
  text: string;
  class?: string;
} & VariantType
  & AlignType;

type LinkButtonType = CoreType & {
  href: string;
  fluid?: boolean;
};

type StandardButtonType = CoreType & {
  href?: string;
  fluid?: never;
};

export type ButtonType = LinkButtonType | StandardButtonType;

// Other
import { BlockType, ChildrenType } from '../types';
import { isBlockArrayClass } from '../../guards/isBlockArrayClass';
import { isBlockClass } from '../../guards/isBlockClass';

type ReturnedType<P> = {
  props: P;
  children: ChildrenType;
};

export const divideProperties = <P extends BlockType>(context: P): ReturnedType<P> => {
  const children: ChildrenType = {};
  const props: Record<string, unknown> = {};

  Object.entries(context).forEach(([key, value]) => {
    if (isBlockArrayClass(value)) {
      children[key] = value;
    } else if (isBlockClass(value)) {
      children[key] = value;
    } else {
      props[key] = value;
    }
  });

  return {
    props: props as P,
    children,
  };
};

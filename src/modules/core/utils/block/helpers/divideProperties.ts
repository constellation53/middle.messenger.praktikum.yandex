// Other
import { BlockType, ChildrenBaseType, ChildrenType } from '../types';
import { isBlockArrayClass } from '../../guards/isBlockArrayClass';
import { isBlockClass } from '../../guards/isBlockClass';

type ReturnedType<P, C extends ChildrenBaseType> = {
  props: P;
  children: ChildrenType<C>;
};

export const divideProperties = <P extends BlockType, C extends ChildrenBaseType>
  (context: P): ReturnedType<P, C> => {
  const children: ChildrenType<C> = ({} as ChildrenType<C>);
  const props: Record<string, unknown> = {};

  Object.entries(context).forEach(([key, value]) => {
    if (isBlockArrayClass(value)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      children[key] = value;
    } else if (isBlockClass(value)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      children[key] = value;
    } else {
      props[key] = value;
    }
  });

  return {
    props: props as P,
    children: children as ChildrenType<C>,
  };
};

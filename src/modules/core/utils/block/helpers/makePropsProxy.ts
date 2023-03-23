// Other
import { BlockType, EventBusFuncType, EventEnum, PropsType } from '../types';

export const makePropsProxy = <P extends BlockType>(
  props: PropsType<P>,
  eventBus: EventBusFuncType<P>,
): P => new Proxy(props, {
    get: (target, property: string): P[string] => {
      const isFunction = typeof target[property] === 'function';

      // eslint-disable-next-line @typescript-eslint/ban-types
      const handler = <Function>target[property];

      return isFunction ? handler.bind(this) : target[property];
    },
    set: (target, property: string, value): boolean => {
      const old = { ...target };

      // eslint-disable-next-line no-param-reassign
      target[property as keyof P] = value;

      eventBus().emit(EventEnum.FLOW_CDU, old, target);

      return true;
    },
  });

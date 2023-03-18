// Other
import { BlockEventBusType, BlockType, EventEnum } from '../types';

export const makePropsProxy = <P extends BlockType>(
  props: P,
  eventBus: BlockEventBusType<P>,
): P => new Proxy(props, {
    get: (target, property: string): P[string] => {
      const isFunction = typeof target[property] === 'function';

      return isFunction ? target[property].bind(this) : target[property];
    },
    set: (target, property: string, value): boolean => {
      const old = { ...target };

      // eslint-disable-next-line no-param-reassign
      target[property as keyof P] = value;

      eventBus().emit(EventEnum.FLOW_CDU, old, target);

      return true;
    },
  });

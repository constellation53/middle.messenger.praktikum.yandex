// Core
import { Block } from '../../utils/block';

// Templates
import template from './index.hbs';

// Other
import { AvatarType } from './types';
import * as styles from './styles/index.module.scss';
import { PropsType as BlockPropsType } from '../../utils/block/types';

type PropsType = AvatarType;

export class Avatar extends Block<PropsType> {
  constructor(props: BlockPropsType<PropsType>) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}

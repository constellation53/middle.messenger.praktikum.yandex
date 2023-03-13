// Infrastructure
import Block from '../../utils/block';

// Templates
import template from './index.hbs';

// Other
import * as styles from './styles/index.module.scss';
import { ModalType } from './types';

type PropsType = ModalType;

export class Modal extends Block<ModalType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}

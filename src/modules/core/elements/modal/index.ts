// Core
import { Block } from '../../utils/block';

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

  onClickToOverlay(event: Event): void {
    const target = <HTMLDivElement>event.target;

    const isRootElement = this.id === target.getAttribute('data-id');

    if (isRootElement) {
      this.hide();
    }
  }

  componentDidMount(): void {
    const { opened } = this.props;

    if (!opened) {
      this.hide();
    }
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
      events: { click: this.onClickToOverlay.bind(this) },
      settings: { withInternalID: true },
    });
  }
}

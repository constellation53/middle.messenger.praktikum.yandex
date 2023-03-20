// Core
import { Block } from '../../../../core/utils/block';

// Elements
import { Divider } from '../../../../core/elements/divider';
import { Avatar } from '../../../../core/elements/avatar';

// Templates
import template from './index.hbs';

// Other
import * as styles from '../styles/index.module.scss';
import { ChatItemType } from '../types';

export class ChatItemComponent extends Block<ChatItemType> {
  constructor(props: ChatItemType) {
    super(props);
  }

  init(): void {
    this.children.divider = new Divider();

    this.children.avatar = new Avatar({
      alt: this.props.title,
      imgSrc: this.props.avatar,
      small: true,
    });
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}

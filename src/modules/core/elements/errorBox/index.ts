// Core
import { Block } from '../../utils/block';

// Templates
import template from './index.hbs';

// Elements
import { Button } from '../button';

// Other
import { ErrorBoxType } from './types';
import * as styles from './styles/index.module.scss';

type PropsType = ErrorBoxType;

export class ErrorBox extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  init(): void {
    this.children.button = new Button({
      text: this.props.buttonProps.text,
      href: this.props.buttonProps.href,
      secondary: true,
      class: 'size-12',
    });
  }

  render(): HTMLElement {
    return this.compile(template, { ...this.props, styles });
  }
}

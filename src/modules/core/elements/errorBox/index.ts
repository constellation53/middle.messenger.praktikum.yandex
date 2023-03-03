import Block from '../utils/block';
import { ErrorBoxType } from './types';
import { Button } from '../elements/button';
import template from './index.hbs';
import styles from './styles/index.module.scss';

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

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}

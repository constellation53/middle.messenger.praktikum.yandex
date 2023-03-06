import Block from '../../utils/block';
import template from './index.hbs';
import { InputType } from './types';
import styles from './styles/index.module.scss'

export class Input extends Block<InputType> {
  constructor(props: InputType) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles});
  }
}

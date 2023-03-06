import Block from '../../utils/block';
import { ButtonType } from './types';
import template from './index.hbs';
import styles from './styles/index.module.scss';

type PropsType = ButtonType;
export class Button extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}

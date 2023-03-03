import Block from '../../core/utils/block';
import { ButtonType } from './types';
import template from './index.hbs';
import styles from './styles/index.module.scss';

type PropsType = ButtonType;
export class Button extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render(): DocumentFragment {
    console.log(styles)
    return this.compile(template, { ...this.props, styles });
  }
}

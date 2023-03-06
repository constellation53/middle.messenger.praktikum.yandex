// Infrastructure
import Block from '../../utils/block';

// Templates
import template from './index.hbs';

// Other
import { ButtonType } from './types';
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

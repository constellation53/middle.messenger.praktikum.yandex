// Infrastructure
import Block from '../../utils/block';

// Templates
import template from './index.hbs';

// Other
import { InputType } from './types';
import * as styles from './styles/index.module.scss';

type PropsType = InputType;

export class Input extends Block<PropsType> {
  constructor(props: InputType) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}

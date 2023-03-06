import Block from '../../modules/core/utils/block';
import template from './index.hbs';
import { render } from '../../modules/core/utils/render';
import styles from './styles/index.module.scss';

export class SignInPage extends Block {
  constructor() {
    super();
  }

  render(): DocumentFragment {
    return this.compile(template, { styles });
  }
}

const signInPage = new SignInPage();

render('#root', signInPage);

import Block from '../../modules/core/utils/block';
import template from './index.hbs';
import { render } from '../../modules/core/utils/render';
import styles from './styles/index.module.scss';
import { AuthFormComponent } from '../../modules/auth/authForm';

export class SignInPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.authForm = new AuthFormComponent();
  }

  render(): DocumentFragment {
    return this.compile(template, { styles });
  }
}

const signInPage = new SignInPage();

render('#root', signInPage);

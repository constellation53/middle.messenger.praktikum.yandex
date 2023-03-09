// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { AuthFormComponent } from '../../modules/auth/authForm';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';

export class SignInPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.authForm = new AuthFormComponent();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const signInPage = new SignInPage();

render('#root', signInPage);

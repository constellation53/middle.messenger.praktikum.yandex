// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { RegistrationFormComponent } from '../../modules/auth/registrationForm';

// Other
import { render } from '../../modules/core/utils/render';
import styles from './styles/index.module.scss';

export class SignUpPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.registrationForm = new RegistrationFormComponent()
  }

  render(): DocumentFragment {
    return this.compile(template, { styles });
  }
}

const signUpPage = new SignUpPage();

render('#root', signUpPage);

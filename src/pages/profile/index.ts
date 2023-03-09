// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';

export class ProfilePage extends Block {
  constructor() {
    super();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const profilePage = new ProfilePage();

render('#root', profilePage);

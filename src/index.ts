// Core
import { Block } from './modules/core/utils/block';

// Components
import { NavComponent } from './modules/core/components/nav';

// Templates
import template from './index.hbs';

// Other
import { render } from './modules/core/utils/render';
import { routes } from './modules/core/config/routes';
import * as styles from './styles/index.module.scss';

export class MainPage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.navigation = new NavComponent({ routes });
  }

  render(): HTMLElement {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}

const mainPage = new MainPage();

render('#root', mainPage);

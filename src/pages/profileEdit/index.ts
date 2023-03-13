// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { InfoFormComponent } from '../../modules/profile/components/infoForm';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';
import { Avatar } from '../../modules/core/elements/avatar';

export class ProfilePage extends Block {
  constructor() {
    super();
  }

  init(): void {
    this.children.avatar = new Avatar({
      medium: true,
      editable: true,
      alt: 'Загрузить фото',
    });

    this.children.profileInfoForm = new InfoFormComponent();
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const profilePage = new ProfilePage();

render('#root', profilePage);

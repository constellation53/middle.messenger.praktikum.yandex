// Core
import Block from '../../modules/core/utils/block';

// Elements
import { Modal } from '../../modules/core/elements/modal';
import { Avatar } from '../../modules/core/elements/avatar';

// Templates
import template from './index.hbs';

// Components
import { InfoFormComponent } from '../../modules/profile/components/infoForm';
import { AvatarFormComponent } from '../../modules/profile/components/avatarForm';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';
import { isBlockClass } from '../../modules/core/utils/guards/isBlockClass';

export class ProfileEditPage extends Block {
  constructor() {
    super();
  }

  onAvatarClick(): void {
    if (isBlockClass(this.children.changeAvatarModal)) {
      this.children.changeAvatarModal.show();
    }
  }

  init(): void {
    this.children.avatar = new Avatar({
      medium: true,
      editable: true,
      alt: 'Загрузить фото',
      events: { click: this.onAvatarClick.bind(this) },
    });

    this.children.profileInfoForm = new InfoFormComponent();

    const avatarForm = new AvatarFormComponent();

    this.children.changeAvatarModal = new Modal({ content: avatarForm });
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const profileEditPage = new ProfileEditPage();

render('#root', profileEditPage);

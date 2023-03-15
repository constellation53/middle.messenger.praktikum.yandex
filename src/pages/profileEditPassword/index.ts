// Infrastructure
import Block from '../../modules/core/utils/block';

// Templates
import template from './index.hbs';

// Components
import { PasswordFormComponent } from '../../modules/profile/components/passwordForm';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';
import { Avatar } from '../../modules/core/elements/avatar';
import { isBlockClass } from '../../modules/core/utils/guards/isBlockClass';
import { AvatarFormComponent } from '../../modules/profile/components/avatarForm';
import { Modal } from '../../modules/core/elements/modal';

export class ProfileEditPasswordPage extends Block {
  constructor() {
    super();
  }

  onAvatarClick(): void {
    console.log(isBlockClass(this.children.changeAvatarModal))
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

    this.children.passwordForm = new PasswordFormComponent();


    const avatarForm = new AvatarFormComponent();

    this.children.changeAvatarModal = new Modal({ content: avatarForm });
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const profileEditPasswordPage = new ProfileEditPasswordPage();

render('#root', profileEditPasswordPage);

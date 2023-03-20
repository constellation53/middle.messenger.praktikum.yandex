// Core
import { Block } from '../../modules/core/utils/block';

// Elements
import { Avatar } from '../../modules/core/elements/avatar';
import { Modal } from '../../modules/core/elements/modal';
import { Button } from '../../modules/core/elements/button';
import { Divider } from '../../modules/core/elements/divider';

// Templates
import template from './index.hbs';

// Components
import { AvatarFormComponent } from '../../modules/profile/components/avatarForm';
import { InfoFormComponent } from '../../modules/profile/components/infoForm';

// Other
import { render } from '../../modules/core/utils/render';
import * as styles from './styles/index.module.scss';
import { isBlockClass } from '../../modules/core/utils/guards/isBlockClass';

export class ProfilePage extends Block {
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

    this.children.profileInfoForm = new InfoFormComponent({ disabled: true });

    // TODO: ADD LINKS
    this.children.changeProfileInfoButton = new Button({
      text: 'Изменить данные',
      secondary: true,
      alignLeft: true,
      fluid: true,
    });

    this.children.changeProfileInfoDivider = new Divider();

    this.children.changeProfilePasswordButton = new Button({
      text: 'Изменить пароль',
      secondary: true,
      alignLeft: true,
      fluid: true,
    });

    this.children.changeProfileePasswordDivider = new Divider();

    this.children.logoutButton = new Button({
      text: 'Выйти',
      tertiary: true,
      alignLeft: true,
      fluid: true,
    });

    const avatarForm = new AvatarFormComponent();

    this.children.changeAvatarModal = new Modal({ content: avatarForm });
  }

  render(): HTMLElement {
    return this.compile(template, { styles });
  }
}

const profilePage = new ProfilePage();

render('#root', profilePage);

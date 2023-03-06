import { RoutesConfigType } from './types';

export const routes: RoutesConfigType = {
  signIn: {
    name: 'signIn',
    path: '/src/pages/signIn/singIn.hbs',
  },
  signUp: {
    name: 'signUp',
    path: '/src/pages/signUp/signUp.hbs',
  },
  chat: {
    name: 'chat',
    path: '/src/pages/chat/chat.hbs',
  },
  notFound: {
    name: 'notFound',
    path: '/pages/notFound',
  },
  internalError: {
    name: 'internalError',
    path: '/src/pages/internalError',
  },
  profile: {
    name: 'profile',
    path: '/src/pages/profile/profile.hbs',
  },
  profileEdit: {
    name: 'profileEdit',
    path: '/src/pages/profileEdit/profileEdit.hbs',
  },
  profileEditPassword: {
    name: 'profileEditPassword',
    path: '/src/pages/profileEditPassword/profileEditPassword.hbs',
  },
  profileUploadAvatar: {
    name: 'profileUploadAvatar',
    path: '/src/pages/profileUploadAvatar/profileUploadAvatar.hbs',
  },
};

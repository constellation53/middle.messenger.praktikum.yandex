import { RoutesConfigType } from './types';

export const routes: RoutesConfigType = {
  signIn: {
    name: 'signIn',
    path: '/pages/signIn',
  },
  signUp: {
    name: 'signUp',
    path: '/pages/signUp',
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
    path: '/pages/internalError',
  },
  profile: {
    name: 'profile',
    path: '/pages/profile',
  },
  profileEdit: {
    name: 'profileEdit',
    path: '/pages/profileEdit',
  },
  profileEditPassword: {
    name: 'profileEditPassword',
    path: '/pages/profileEditPassword',
  },
  profileUploadAvatar: {
    name: 'profileUploadAvatar',
    path: '/src/pages/profileUploadAvatar/profileUploadAvatar.hbs',
  },
};

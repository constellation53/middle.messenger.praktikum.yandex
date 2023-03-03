export type RouteNameType =
  | 'signIn'
  | 'signUp'
  | 'chat'
  | 'notFound'
  | 'internalError'
  | 'profile'
  | 'profileEdit'
  | 'profileEditPassword'
  | 'profileUploadAvatar';

type RouteType = {
  name: RouteNameType;
  path: string;
};


export type RoutesConfigType = Record<RouteNameType, RouteType>;

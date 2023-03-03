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


export type RoutesConfigType = Record<RouteNameType, string>;

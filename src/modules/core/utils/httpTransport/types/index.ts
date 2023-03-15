export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type OptionsType = {
  method: Method;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
};

export type OptionsWithoutMethod = Omit<OptionsType, 'method'>;

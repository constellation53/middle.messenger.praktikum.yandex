export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type OptionsType = {
  method?: Method;
  data?: Document | XMLHttpRequestBodyInit | null;
  headers?: Record<string, string>
};

export type OptionsWithoutMethod = Omit<OptionsType, 'method'>;

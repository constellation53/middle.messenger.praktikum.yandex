// Other
import {
  Method,
  OptionsType,
  OptionsWithoutMethod,
} from './types';
import { queryStringify } from './helpers/queryStringify';

export class HTTPTransport {
  get(
    url: string,
    options: OptionsWithoutMethod = {},
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.GET });
  }

  post(
    url: string,
    options: OptionsWithoutMethod = {},
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.POST });
  }

  put(
    url: string,
    options: OptionsWithoutMethod = {},
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.PUT });
  }

  delete(
    url: string,
    options: OptionsWithoutMethod = {},
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.DELETE });
  }

  request(
    url: string,
    options: OptionsType = { method: Method.GET },
  ): Promise<XMLHttpRequest> {
    const {
      data,
      method = Method.GET,
      headers = {},
    } = options;

    const endpoint = method === Method.GET && data ? `${url}${queryStringify(data)}` : url;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, endpoint);

      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = (): void => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (!data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

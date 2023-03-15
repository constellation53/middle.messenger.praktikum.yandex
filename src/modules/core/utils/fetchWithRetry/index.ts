// Other
import { OptionsType } from './types';
import { HTTPTransport } from '../httpTransport';

const fetchWithRetry = (url: string, options: OptionsType = {}): Promise<XMLHttpRequest> => {
  const { tries = 1, ...httpTransportOptions } = options;

  const onError = (err: unknown): Promise<XMLHttpRequest> => {
    const triesLeft = tries - 1;
    if (!triesLeft) {
      throw err;
    }

    return fetchWithRetry(url, { ...options, tries: triesLeft });
  }

  const request = new HTTPTransport().request(url, httpTransportOptions)

  return request.catch(onError);
};

export const queryStringify = (data: Document | XMLHttpRequestBodyInit | null): string => {
  const target = data || {};

  return Object.entries(target).reduce((acc, [key, value], index, self) => {
    if (self.length - 1 === index) {
      return `${acc}${key}=${value}`;
    }

    return `${acc}${key}=${value}&`;
  }, '?');
};

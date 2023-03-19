export const calculateLines = (selector: string): number => {
  const element = document.querySelector(selector);

  const style = window.getComputedStyle(element!, null);

  const height = parseInt(style.getPropertyValue('height'), 10);

  const lineHeight = parseInt(style.getPropertyValue('line-height'), 10);

  return Math.ceil(height / lineHeight);
};

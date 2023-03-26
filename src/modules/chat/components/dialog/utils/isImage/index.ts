const imageReg = /[/.](gif|jpg|jpeg|tiff|png)(\?[0-9]*)?$/i;

export const isImage = (image: string): boolean => Boolean(image.match(imageReg)?.length);

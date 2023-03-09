export const addEvents = <P extends Record<string, any>>(element: HTMLElement, props: P): void => {
  const events: Record<string, any> = 'events' in props ? props.events : {};

  const tuple = Object.entries<
    (
      this: HTMLElement,
      ev: HTMLElementEventMap[keyof HTMLElementEventMap]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => any
  >(events);

  tuple.forEach(([name, listener]) => {
    element.addEventListener(<keyof HTMLElementEventMap>name, listener);
  });
};

// У кнопки есть index.js, который экспортирует только нужное
import Button from './components/button/Button';
import { render } from './modules/core/utils/render';

const button = new Button({
  child: 'Click me',
  events: {
    click: (): void => console.log('Click me'),
  },
  settings: {
    withInternalID: true,
  },
});

// app — это class дива в корне DOM
render('#root', button);

// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//   button.setProps({
//     child: 'Click me, please',
//   });
// }, 2000);

import { MainPage } from './pages/main';
import { render } from './modules/core/utils/render';

const mainPage = new MainPage();

render('#root', mainPage);

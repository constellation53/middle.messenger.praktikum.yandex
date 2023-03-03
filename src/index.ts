import { render } from './modules/core/utils/render';
import { MainPage } from "./pages/main";

const mainPage = new MainPage();

render('#root', mainPage);

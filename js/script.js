import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropDown from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import { SlideNav } from './modules/slide.js';

new ScrollSuave('[data-menu="suave"] a[href^="#"]').init();
new Accordion('[data-anime="accordion"] dt').init();
new TabNav('[data-tab="menu"] li', '[data-tab="content"] section').init();
new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
).init();
new ToolTip('[data-tooltip]').init();

new ScrollAnima('[data-anime="scroll"]').init();
new DropDown('[data-dropdown]').init();
new MenuMobile('[data-menu="button"]', '[data-menu="list"]').init();

new Funcionamento('[data-semana]', 'aberto').init();
fetchAnimais('../../json/animais-api.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
const slide = new SlideNav('.slide', '.slide-wrapper').init();
slide.addControl('.custom-controls');

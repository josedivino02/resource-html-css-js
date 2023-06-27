import outSideClick from './outside-click.js';

export default class MenuMobile {
  constructor(button, list, eventos) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    if (eventos === undefined) this.eventos = ['touchstart', 'click'];
    else this.eventos = eventos;
    this.active = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);

    outSideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach(evento =>
      this.menuButton.addEventListener(evento, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}

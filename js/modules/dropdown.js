import outSideClick from './outside-click.js';

export default class DropDown {
  constructor(dropDownMenu, events) {
    this.dropdownMenus = document.querySelectorAll(dropDownMenu);
    this.activeClass = 'active';
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropDownEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownEvent();
    }
    return this;
  }
}

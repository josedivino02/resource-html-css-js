import outSideClick from './outside-click.js';

let userEvents = ['touchstart', 'click'];

export default function initDropDown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(menu => {
    userEvents.forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outSideClick(this, userEvents, () => {
      this.classList.remove('active');
    });
  }
}

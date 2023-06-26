export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo');

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

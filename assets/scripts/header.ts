import './searchbar';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-xs');
const appContent = document.querySelector('.app-content');

burger.addEventListener('click', (event: MouseEvent) => {
  menu.classList.toggle('hidden');
});

appContent.addEventListener('click', (event: MouseEvent) => {
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
});

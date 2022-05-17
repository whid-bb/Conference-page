const mobileNav = document.getElementById('m--menu-btn');
const mainHeader = document.getElementById('main-top-header');
mobileNav.addEventListener('click', () => {
  mainHeader.classList.toggle('m--open');
});

document.addEventListener('keydown', (e) => {
  if (mainHeader.classList.contains('m--open')) {
    if (e.key === 'Escape') {
      console.log('contains - remove');
      mainHeader.classList.remove('m--open');
    }
  }
});

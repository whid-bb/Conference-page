const mobileNav = document.getElementById('m--menu-btn');
const mainHeader = document.getElementById('main-top-header');
const nav = document.getElementById('main-nav');

mobileNav.addEventListener('click', () => {
  mainHeader.classList.toggle('m--open');
  document.body.classList.toggle('body-fixed');
});

document.addEventListener('keydown', (e) => {
  if (mainHeader.classList.contains('m--open')) {
    if (e.key === 'Escape') {
      mainHeader.classList.remove('m--open');
    }
  }
});

window.scroll({
  behavior: 'smooth',
});

const showTopHeaderBarDesktop = () => {
  if (window.innerWidth > 768) {
    if (window.scrollY === 0) {
      nav.classList.add('menu-sc');
    } else {
      nav.classList.remove('menu-sc');
    }
  } else {
    nav.classList.remove('menu-sc');
  }
};

document.addEventListener('scroll', () => {
  showTopHeaderBarDesktop();
});
window.addEventListener('resize', () => {
  showTopHeaderBarDesktop();
});
showTopHeaderBarDesktop();

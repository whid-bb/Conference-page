const header = document.getElementById('main-top-header');
const headGfx = document.querySelectorAll('.header-gfx');

const setAttrSpeed = () => {
  const speed = Math.floor(Math.random() * (-10 - 10) + 10);
  return speed !== 0 ? speed : setAttrSpeed();
};

headGfx.forEach((gfx) => {
  gfx.setAttribute('data-speed', setAttrSpeed());
});

header.addEventListener('mousemove', (e) => {
  headGfx.forEach((gfx) => {
    // const speed = Math.floor(Math.random() * (-10 - 10) + 10);
    const x = (window.innerWidth - e.pageX * gfx.dataset.speed) / 100;
    const y = (window.innerHeight - e.pageY * gfx.dataset.speed) / 100;
    gfx.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

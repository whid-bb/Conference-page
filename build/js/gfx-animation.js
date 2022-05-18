const header = document.getElementById('main-top-header');
const headGfx = document.querySelectorAll('.header-gfx');

const setAttrSpeed = () => {
  const speed = Math.floor(Math.random() * (-10 - 10) + 10);
  return speed !== 0 ? speed : setAttrSpeed();
};

headGfx.forEach((gfx) => {
  gfx.setAttribute('data-speed', setAttrSpeed());
});

document.addEventListener('mousemove', (e) => {
  headGfx.forEach((gfx) => {
    // const speed = Math.floor(Math.random() * (-10 - 10) + 10);
    const speed = gfx.dataset.speed;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    gfx.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

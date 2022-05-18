(self["webpackChunkpaumar_eu"] = self["webpackChunkpaumar_eu"] || []).push([["index"],{

/***/ "./build/index.js":
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/base.scss */ "./build/scss/base.scss");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/nav */ "./build/js/nav.js");
/* harmony import */ var _js_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_speakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/speakers */ "./build/js/speakers.js");
/* harmony import */ var _js_gfx_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/gfx-animation */ "./build/js/gfx-animation.js");
/* harmony import */ var _js_gfx_animation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_gfx_animation__WEBPACK_IMPORTED_MODULE_3__);






/***/ }),

/***/ "./build/js/gfx-animation.js":
/*!***********************************!*\
  !*** ./build/js/gfx-animation.js ***!
  \***********************************/
/***/ (() => {

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


/***/ }),

/***/ "./build/js/nav.js":
/*!*************************!*\
  !*** ./build/js/nav.js ***!
  \*************************/
/***/ (() => {

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


/***/ }),

/***/ "./build/js/speakers.js":
/*!******************************!*\
  !*** ./build/js/speakers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_speakers_Shuntaro_Furukawa_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/speakers/Shuntaro-Furukawa.webp */ "./build/img/speakers/Shuntaro-Furukawa.webp");
/* harmony import */ var _img_speakers_Sundar_Pichai_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/speakers/Sundar-Pichai.webp */ "./build/img/speakers/Sundar-Pichai.webp");
/* harmony import */ var _img_speakers_Susan_Wojcicki_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/speakers/Susan-Wojcicki.webp */ "./build/img/speakers/Susan-Wojcicki.webp");
/* harmony import */ var _img_speakers_Tara_Reed_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/speakers/Tara-Reed.webp */ "./build/img/speakers/Tara-Reed.webp");
/* harmony import */ var _img_speakers_Tristan_Harris_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/speakers/Tristan-Harris.webp */ "./build/img/speakers/Tristan-Harris.webp");
/* harmony import */ var _img_speakers_Vanessa_Guthrie_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/speakers/Vanessa-Guthrie.webp */ "./build/img/speakers/Vanessa-Guthrie.webp");







const fspeakers = [
  {
    header: 'Featured Speakers',
  },
  {
    name: 'Shuntaro Furukawa',
    img: _img_speakers_Shuntaro_Furukawa_webp__WEBPACK_IMPORTED_MODULE_0__,
    credentials: 'CEO, Nintendo',
    description:
      'Shuntaro Furukawa is Nintendo’s sixth global president and has been with the company for 27 years. In 2020, he oversaw the launch of Animal Crossing: New Horizons — which became an island of calm and human connection during the pandemic — and last year his company followed that with the launch of the Nintendo Switch OLED.',
    credit: 'Nintendo',
  },
  {
    name: 'Sundar Pichai',
    img: _img_speakers_Sundar_Pichai_webp__WEBPACK_IMPORTED_MODULE_1__,
    credentials: 'CEO, Google and Alphabet',
    description:
      'Sundar Pichai is the CEO of both Alphabet, Inc. and Google, which puts him in a seat of power in the universe of technology like no other. In 2021, he told the Times of India that while other companies may be focusing on AI, the future of Google is timeless: Search.',
    credit: 'Google',
  },
  {
    name: 'Susan Wojcicki',
    img: _img_speakers_Susan_Wojcicki_webp__WEBPACK_IMPORTED_MODULE_2__,
    credentials: 'CEO, YouTube',
    description:
      'With her elemental role in the creation of Google, the development of AdSense and Google Analytics, and her current position as the CEO of YouTube, Susan Wojcicki is a household name for anyone who follows technology. Last year, she received a “Free Expression” award from the Freedom Forum Institute for the impact YouTube has on protecting free speech around the world.',
    credit: 'YouTube',
  },
  {
    name: 'Tara Reed',
    img: _img_speakers_Tara_Reed_webp__WEBPACK_IMPORTED_MODULE_3__,
    credentials: 'Founder and CEO, Apps Without Code',
    description:
      'Tara Reed is a pioneer of no-code development and the founder of Apps Without Code. Her adventures started when she created an app — Kollecto — which matches people with art, without writing a single line of code. Her “no-code university” has now taught 150,000 people who have no coding background how to create apps.',
    credit: 'LinkedIn',
  },
  {
    name: 'Tristan Harris',
    img: _img_speakers_Tristan_Harris_webp__WEBPACK_IMPORTED_MODULE_4__,
    credentials: 'Co-founder, The Center for Humane Technology',
    description:
      'As president and cofounder of the Center for Humane Technology, Tristan Harris devotes his time to contemplating ways technology can be more humane. His podcasts, courses, research, and toolkits are designed to help people reclaim their attention in the face of tools that are engineered to distract.',
    credit: 'Humanetech',
  },
  {
    name: 'Vanessa Guthrie',
    img: _img_speakers_Vanessa_Guthrie_webp__WEBPACK_IMPORTED_MODULE_5__,
    credentials: 'Head of Snap Originals, Snap',
    description:
      'Snap Inc. — the company behind SnapChat — is making big efforts to develop original, short-form, mobile content to keep the attention of its teen and early-20s demographic and Vanessa Guthrie is leading this charge. She took on the role of Head of Original content in July of 2021, and has been building out shows at a dizzying rate since then.',
    credit: 'Snap',
  },
];

const speakerSection = document.getElementById('featured-speakers');
if (speakerSection) {
  let speakersSectionContent = '';

  fspeakers.forEach((speaker, i) => {
    if (!speaker.header) {
      speakersSectionContent += `
        <div class="section-box-content">
            <div class="sc-ico-container">
                <div class="ss-speaker-img">
                    <div class="fs-bg-img"></div>
                    <img src="${speaker.img}" alt="Image of ${
        speaker.name
      }" width="400px">
                </div>
            </div>
            <div class="speaker-desc">
            <div class="sd-name-container">
            <h3>${speaker.name}</h3>
            <h4>${speaker.credentials}</h4>
            </div>
                <p>
                    ${speaker.description.substring(0, 100)}...<br>
                    <button class="speaker-read-more" data-speaker-read=${i}>(read more)</button>
                </p>
            </div>
        </div>         
        `;
    } else if (speaker.header) {
      speakersSectionContent += `
      <div class="section-head">
            <h2>${speaker.header}</h2>
        </div>
        <div class="content section-container">
      `;
    }
  });
  speakersSectionContent += '</div>';

  speakerSection.insertAdjacentHTML('afterbegin', speakersSectionContent);
}


/***/ }),

/***/ "./build/scss/base.scss":
/*!******************************!*\
  !*** ./build/scss/base.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./build/img/speakers/Shuntaro-Furukawa.webp":
/*!***************************************************!*\
  !*** ./build/img/speakers/Shuntaro-Furukawa.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ace60ae0c7a372a503c8.webp";

/***/ }),

/***/ "./build/img/speakers/Sundar-Pichai.webp":
/*!***********************************************!*\
  !*** ./build/img/speakers/Sundar-Pichai.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/a1143fbd754bd6c5f6fe.webp";

/***/ }),

/***/ "./build/img/speakers/Susan-Wojcicki.webp":
/*!************************************************!*\
  !*** ./build/img/speakers/Susan-Wojcicki.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/9baba5303b8b58861a09.webp";

/***/ }),

/***/ "./build/img/speakers/Tara-Reed.webp":
/*!*******************************************!*\
  !*** ./build/img/speakers/Tara-Reed.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3609d7ed885dbb6f27f3.webp";

/***/ }),

/***/ "./build/img/speakers/Tristan-Harris.webp":
/*!************************************************!*\
  !*** ./build/img/speakers/Tristan-Harris.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/e58d4b2219917c7aab7d.webp";

/***/ }),

/***/ "./build/img/speakers/Vanessa-Guthrie.webp":
/*!*************************************************!*\
  !*** ./build/img/speakers/Vanessa-Guthrie.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/b7e702fc587738679e94.webp";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./build/index.js"), __webpack_exec__("./build/scss/base.scss"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUjtBQUNLO0FBQ0s7Ozs7Ozs7Ozs7O0FDSDVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEVBQUUsaUJBQWlCLEVBQUU7QUFDN0QsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkM4RDtBQUNOO0FBQ0E7QUFDTjtBQUNRO0FBQ0M7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyxpRUFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyw2REFBTTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLDhEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMseURBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyw4REFBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUywrREFBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixhQUFhO0FBQy9CLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQsMEVBQTBFLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGtCQUFrQixlQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXVtYXIuZXUvLi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wYXVtYXIuZXUvLi9idWlsZC9qcy9nZngtYW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BhdW1hci5ldS8uL2J1aWxkL2pzL25hdi5qcyIsIndlYnBhY2s6Ly9wYXVtYXIuZXUvLi9idWlsZC9qcy9zcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9wYXVtYXIuZXUvLi9idWlsZC9zY3NzL2Jhc2Uuc2Nzcz9mMTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vanMvbmF2JztcbmltcG9ydCAnLi9qcy9zcGVha2Vycyc7XG5pbXBvcnQgJy4vanMvZ2Z4LWFuaW1hdGlvbic7XG4iLCJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi10b3AtaGVhZGVyJyk7XG5jb25zdCBoZWFkR2Z4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1nZngnKTtcblxuY29uc3Qgc2V0QXR0clNwZWVkID0gKCkgPT4ge1xuICBjb25zdCBzcGVlZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgtMTAgLSAxMCkgKyAxMCk7XG4gIHJldHVybiBzcGVlZCAhPT0gMCA/IHNwZWVkIDogc2V0QXR0clNwZWVkKCk7XG59O1xuXG5oZWFkR2Z4LmZvckVhY2goKGdmeCkgPT4ge1xuICBnZnguc2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJywgc2V0QXR0clNwZWVkKCkpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gIGhlYWRHZnguZm9yRWFjaCgoZ2Z4KSA9PiB7XG4gICAgLy8gY29uc3Qgc3BlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoLTEwIC0gMTApICsgMTApO1xuICAgIGNvbnN0IHNwZWVkID0gZ2Z4LmRhdGFzZXQuc3BlZWQ7XG4gICAgY29uc3QgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIGUucGFnZVggKiBzcGVlZCkgLyAxMDA7XG4gICAgY29uc3QgeSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBlLnBhZ2VZICogc3BlZWQpIC8gMTAwO1xuICAgIGdmeC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3h9cHgpIHRyYW5zbGF0ZVkoJHt5fXB4KWA7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbS0tbWVudS1idG4nKTtcbmNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi10b3AtaGVhZGVyJyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1uYXYnKTtcblxubW9iaWxlTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWluSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ20tLW9wZW4nKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdib2R5LWZpeGVkJyk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIGlmIChtYWluSGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnbS0tb3BlbicpKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgbWFpbkhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdtLS1vcGVuJyk7XG4gICAgfVxuICB9XG59KTtcblxud2luZG93LnNjcm9sbCh7XG4gIGJlaGF2aW9yOiAnc21vb3RoJyxcbn0pO1xuXG5jb25zdCBzaG93VG9wSGVhZGVyQmFyRGVza3RvcCA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbWVudS1zYycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zYycpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zYycpO1xuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gIHNob3dUb3BIZWFkZXJCYXJEZXNrdG9wKCk7XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIHNob3dUb3BIZWFkZXJCYXJEZXNrdG9wKCk7XG59KTtcbnNob3dUb3BIZWFkZXJCYXJEZXNrdG9wKCk7XG4iLCJpbXBvcnQgU2h1bnRhcm8gZnJvbSAnLi4vaW1nL3NwZWFrZXJzL1NodW50YXJvLUZ1cnVrYXdhLndlYnAnO1xuaW1wb3J0IFN1bmRhciBmcm9tICcuLi9pbWcvc3BlYWtlcnMvU3VuZGFyLVBpY2hhaS53ZWJwJztcbmltcG9ydCBTdXNhbiBmcm9tICcuLi9pbWcvc3BlYWtlcnMvU3VzYW4tV29qY2lja2kud2VicCc7XG5pbXBvcnQgVGFyYSBmcm9tICcuLi9pbWcvc3BlYWtlcnMvVGFyYS1SZWVkLndlYnAnO1xuaW1wb3J0IFRyaXN0YW4gZnJvbSAnLi4vaW1nL3NwZWFrZXJzL1RyaXN0YW4tSGFycmlzLndlYnAnO1xuaW1wb3J0IFZhbmVzc2EgZnJvbSAnLi4vaW1nL3NwZWFrZXJzL1ZhbmVzc2EtR3V0aHJpZS53ZWJwJztcblxuY29uc3QgZnNwZWFrZXJzID0gW1xuICB7XG4gICAgaGVhZGVyOiAnRmVhdHVyZWQgU3BlYWtlcnMnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NodW50YXJvIEZ1cnVrYXdhJyxcbiAgICBpbWc6IFNodW50YXJvLFxuICAgIGNyZWRlbnRpYWxzOiAnQ0VPLCBOaW50ZW5kbycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU2h1bnRhcm8gRnVydWthd2EgaXMgTmludGVuZG/igJlzIHNpeHRoIGdsb2JhbCBwcmVzaWRlbnQgYW5kIGhhcyBiZWVuIHdpdGggdGhlIGNvbXBhbnkgZm9yIDI3IHllYXJzLiBJbiAyMDIwLCBoZSBvdmVyc2F3IHRoZSBsYXVuY2ggb2YgQW5pbWFsIENyb3NzaW5nOiBOZXcgSG9yaXpvbnMg4oCUIHdoaWNoIGJlY2FtZSBhbiBpc2xhbmQgb2YgY2FsbSBhbmQgaHVtYW4gY29ubmVjdGlvbiBkdXJpbmcgdGhlIHBhbmRlbWljIOKAlCBhbmQgbGFzdCB5ZWFyIGhpcyBjb21wYW55IGZvbGxvd2VkIHRoYXQgd2l0aCB0aGUgbGF1bmNoIG9mIHRoZSBOaW50ZW5kbyBTd2l0Y2ggT0xFRC4nLFxuICAgIGNyZWRpdDogJ05pbnRlbmRvJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdW5kYXIgUGljaGFpJyxcbiAgICBpbWc6IFN1bmRhcixcbiAgICBjcmVkZW50aWFsczogJ0NFTywgR29vZ2xlIGFuZCBBbHBoYWJldCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU3VuZGFyIFBpY2hhaSBpcyB0aGUgQ0VPIG9mIGJvdGggQWxwaGFiZXQsIEluYy4gYW5kIEdvb2dsZSwgd2hpY2ggcHV0cyBoaW0gaW4gYSBzZWF0IG9mIHBvd2VyIGluIHRoZSB1bml2ZXJzZSBvZiB0ZWNobm9sb2d5IGxpa2Ugbm8gb3RoZXIuIEluIDIwMjEsIGhlIHRvbGQgdGhlIFRpbWVzIG9mIEluZGlhIHRoYXQgd2hpbGUgb3RoZXIgY29tcGFuaWVzIG1heSBiZSBmb2N1c2luZyBvbiBBSSwgdGhlIGZ1dHVyZSBvZiBHb29nbGUgaXMgdGltZWxlc3M6IFNlYXJjaC4nLFxuICAgIGNyZWRpdDogJ0dvb2dsZScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3VzYW4gV29qY2lja2knLFxuICAgIGltZzogU3VzYW4sXG4gICAgY3JlZGVudGlhbHM6ICdDRU8sIFlvdVR1YmUnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1dpdGggaGVyIGVsZW1lbnRhbCByb2xlIGluIHRoZSBjcmVhdGlvbiBvZiBHb29nbGUsIHRoZSBkZXZlbG9wbWVudCBvZiBBZFNlbnNlIGFuZCBHb29nbGUgQW5hbHl0aWNzLCBhbmQgaGVyIGN1cnJlbnQgcG9zaXRpb24gYXMgdGhlIENFTyBvZiBZb3VUdWJlLCBTdXNhbiBXb2pjaWNraSBpcyBhIGhvdXNlaG9sZCBuYW1lIGZvciBhbnlvbmUgd2hvIGZvbGxvd3MgdGVjaG5vbG9neS4gTGFzdCB5ZWFyLCBzaGUgcmVjZWl2ZWQgYSDigJxGcmVlIEV4cHJlc3Npb27igJ0gYXdhcmQgZnJvbSB0aGUgRnJlZWRvbSBGb3J1bSBJbnN0aXR1dGUgZm9yIHRoZSBpbXBhY3QgWW91VHViZSBoYXMgb24gcHJvdGVjdGluZyBmcmVlIHNwZWVjaCBhcm91bmQgdGhlIHdvcmxkLicsXG4gICAgY3JlZGl0OiAnWW91VHViZScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGFyYSBSZWVkJyxcbiAgICBpbWc6IFRhcmEsXG4gICAgY3JlZGVudGlhbHM6ICdGb3VuZGVyIGFuZCBDRU8sIEFwcHMgV2l0aG91dCBDb2RlJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUYXJhIFJlZWQgaXMgYSBwaW9uZWVyIG9mIG5vLWNvZGUgZGV2ZWxvcG1lbnQgYW5kIHRoZSBmb3VuZGVyIG9mIEFwcHMgV2l0aG91dCBDb2RlLiBIZXIgYWR2ZW50dXJlcyBzdGFydGVkIHdoZW4gc2hlIGNyZWF0ZWQgYW4gYXBwIOKAlCBLb2xsZWN0byDigJQgd2hpY2ggbWF0Y2hlcyBwZW9wbGUgd2l0aCBhcnQsIHdpdGhvdXQgd3JpdGluZyBhIHNpbmdsZSBsaW5lIG9mIGNvZGUuIEhlciDigJxuby1jb2RlIHVuaXZlcnNpdHnigJ0gaGFzIG5vdyB0YXVnaHQgMTUwLDAwMCBwZW9wbGUgd2hvIGhhdmUgbm8gY29kaW5nIGJhY2tncm91bmQgaG93IHRvIGNyZWF0ZSBhcHBzLicsXG4gICAgY3JlZGl0OiAnTGlua2VkSW4nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RyaXN0YW4gSGFycmlzJyxcbiAgICBpbWc6IFRyaXN0YW4sXG4gICAgY3JlZGVudGlhbHM6ICdDby1mb3VuZGVyLCBUaGUgQ2VudGVyIGZvciBIdW1hbmUgVGVjaG5vbG9neScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQXMgcHJlc2lkZW50IGFuZCBjb2ZvdW5kZXIgb2YgdGhlIENlbnRlciBmb3IgSHVtYW5lIFRlY2hub2xvZ3ksIFRyaXN0YW4gSGFycmlzIGRldm90ZXMgaGlzIHRpbWUgdG8gY29udGVtcGxhdGluZyB3YXlzIHRlY2hub2xvZ3kgY2FuIGJlIG1vcmUgaHVtYW5lLiBIaXMgcG9kY2FzdHMsIGNvdXJzZXMsIHJlc2VhcmNoLCBhbmQgdG9vbGtpdHMgYXJlIGRlc2lnbmVkIHRvIGhlbHAgcGVvcGxlIHJlY2xhaW0gdGhlaXIgYXR0ZW50aW9uIGluIHRoZSBmYWNlIG9mIHRvb2xzIHRoYXQgYXJlIGVuZ2luZWVyZWQgdG8gZGlzdHJhY3QuJyxcbiAgICBjcmVkaXQ6ICdIdW1hbmV0ZWNoJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdWYW5lc3NhIEd1dGhyaWUnLFxuICAgIGltZzogVmFuZXNzYSxcbiAgICBjcmVkZW50aWFsczogJ0hlYWQgb2YgU25hcCBPcmlnaW5hbHMsIFNuYXAnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NuYXAgSW5jLiDigJQgdGhlIGNvbXBhbnkgYmVoaW5kIFNuYXBDaGF0IOKAlCBpcyBtYWtpbmcgYmlnIGVmZm9ydHMgdG8gZGV2ZWxvcCBvcmlnaW5hbCwgc2hvcnQtZm9ybSwgbW9iaWxlIGNvbnRlbnQgdG8ga2VlcCB0aGUgYXR0ZW50aW9uIG9mIGl0cyB0ZWVuIGFuZCBlYXJseS0yMHMgZGVtb2dyYXBoaWMgYW5kIFZhbmVzc2EgR3V0aHJpZSBpcyBsZWFkaW5nIHRoaXMgY2hhcmdlLiBTaGUgdG9vayBvbiB0aGUgcm9sZSBvZiBIZWFkIG9mIE9yaWdpbmFsIGNvbnRlbnQgaW4gSnVseSBvZiAyMDIxLCBhbmQgaGFzIGJlZW4gYnVpbGRpbmcgb3V0IHNob3dzIGF0IGEgZGl6enlpbmcgcmF0ZSBzaW5jZSB0aGVuLicsXG4gICAgY3JlZGl0OiAnU25hcCcsXG4gIH0sXG5dO1xuXG5jb25zdCBzcGVha2VyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWF0dXJlZC1zcGVha2VycycpO1xuaWYgKHNwZWFrZXJTZWN0aW9uKSB7XG4gIGxldCBzcGVha2Vyc1NlY3Rpb25Db250ZW50ID0gJyc7XG5cbiAgZnNwZWFrZXJzLmZvckVhY2goKHNwZWFrZXIsIGkpID0+IHtcbiAgICBpZiAoIXNwZWFrZXIuaGVhZGVyKSB7XG4gICAgICBzcGVha2Vyc1NlY3Rpb25Db250ZW50ICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYy1pY28tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNzLXNwZWFrZXItaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcy1iZy1pbWdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwZWFrZXIuaW1nfVwiIGFsdD1cIkltYWdlIG9mICR7XG4gICAgICAgIHNwZWFrZXIubmFtZVxuICAgICAgfVwiIHdpZHRoPVwiNDAwcHhcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwZWFrZXItZGVzY1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNkLW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDM+JHtzcGVha2VyLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxoND4ke3NwZWFrZXIuY3JlZGVudGlhbHN9PC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAke3NwZWFrZXIuZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIDEwMCl9Li4uPGJyPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3BlYWtlci1yZWFkLW1vcmVcIiBkYXRhLXNwZWFrZXItcmVhZD0ke2l9PihyZWFkIG1vcmUpPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICAgICAgIFxuICAgICAgICBgO1xuICAgIH0gZWxzZSBpZiAoc3BlYWtlci5oZWFkZXIpIHtcbiAgICAgIHNwZWFrZXJzU2VjdGlvbkNvbnRlbnQgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZFwiPlxuICAgICAgICAgICAgPGgyPiR7c3BlYWtlci5oZWFkZXJ9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IHNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICBgO1xuICAgIH1cbiAgfSk7XG4gIHNwZWFrZXJzU2VjdGlvbkNvbnRlbnQgKz0gJzwvZGl2Pic7XG5cbiAgc3BlYWtlclNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgc3BlYWtlcnNTZWN0aW9uQ29udGVudCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
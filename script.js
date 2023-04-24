// Свайпер
const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
});

// Табы

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav_btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  })
})

// Аккордеон

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});

// Бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})


// Поиск

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search__form-show');
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search__form-show');
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
  })
})

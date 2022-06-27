'use strict';

const navigationBar = document.querySelector('.nav');
const operations__tabs__button__container = document.querySelector(
  '.operations__tab-container'
);
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// document.activeElement('keydown', e => {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

//! Create a we use cookies message and display it
const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML =
  '<h3>We use cookies on our page.</h3> <button class="btn btn--close-cookie">Ok</button>';

const header = document.querySelector('.header');

header.before(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

//? Add custom css styles to our message div
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//! Smooth scroling for fast access

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//! Smooth scrolling for nav links
//? add event listener to the parent element

document.querySelectorAll('.nav__links').forEach(links => {
  links.addEventListener('click', function (e) {
    //? Prevent the scroll to the href from the a tag
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');

      const sectionName = document
        .querySelector(`${id}`)
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//! Tabbed component
//? Get requred elements

const tabs__buttons = document.querySelectorAll('.operations__tab');

const tabs__content = document.querySelectorAll('.operations__content');

//? Add event listnere to the clicked tab button
operations__tabs__button__container.addEventListener('click', function (e) {
  // ? Get the clicked btn
  const clickedBtn = e.target.closest('.operations__tab');

  // ? Guard clause if clicked outside the btn container
  if (!clickedBtn) return;

  //? Remove the operations__tab--active class first
  tabs__buttons.forEach(btn => btn.classList.remove('operations__tab--active'));
  //? Add the new operations__tab--active to the new active
  clickedBtn.classList.add('operations__tab--active');

  //? Remove the operations__content--active class first
  tabs__content.forEach(activeContent =>
    activeContent.classList.remove('operations__content--active')
  );
  // ? Get the content element and add the new operations__content--active to the new active
  document
    .querySelector(`.operations__content--${clickedBtn.dataset.tab}`)
    .classList.add('operations__content--active');
});

//! Add links fadeout

const fadeoutLink = function (e, opacityAmount) {
  //? this is now opacity amount as we used bind
  // ? Get the clicked btn

  if (e.target.classList.contains('nav__link')) {
    const clickedNavBtn = e.target;
    const logo = clickedNavBtn.closest('.nav').querySelector('img');

    // ? Get other siblings
    const otherSiblings = clickedNavBtn
      .closest('.nav')
      .querySelectorAll('.nav__link');

    //? Hide the other siblings
    otherSiblings.forEach(sibling => {
      if (sibling !== clickedNavBtn) {
        sibling.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
navigationBar.addEventListener('mouseover', fadeoutLink.bind(0.5));

navigationBar.addEventListener('mouseout', fadeoutLink.bind(1));

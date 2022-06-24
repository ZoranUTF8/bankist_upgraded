'use strict';

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

//? Create a we use cookies message and display it
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

//? Smooth scroling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//? Smooth scrolling for nav links
//? add event listner to the parent element

document.querySelectorAll('.nav__links').forEach(links => {
  links.addEventListener('click', function (e) {
    //? Prevent the scroll to the href from the a tag
    e.preventDefault();

    console.log(e.target);
    if (e.target.classList.contains('nav__link')) {

      const id = e.target.getAttribute('href');

      const sectionName = document
        .querySelector(`${id}`)
        .scrollIntoView({ behavior: 'smooth' });
    }

  });
});

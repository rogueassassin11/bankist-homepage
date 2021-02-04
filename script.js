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

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// SMOOTH SCROLLING

const btnScrollTO = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTO.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //to get offset from top of window
  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

  //to get height and width of viewport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling (add the scroll position from the offset)
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //only used by modern browsers:
  section1.scrollIntoView({ behavior: 'smooth' });
});

/************************************************/
/* SELECTING / CREATING / DELETING ELEMENTS
/************************************************/
/* 
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

// selecting element by tagname updates real time - returns a live HTML collection
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

//prepend and append can only be seen at one place at a time
// header.prepend(message); //prepend adds as a first child
header.append(message); // appends as a last child
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //recent addition
    // message.parentElement.removeChild(message); old way
  }); */

/************************************************/
/* STYLES / ATTRIBUTES / CLASSES
/************************************************/
/* 
//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//you can only get the value of .style if set as inline
console.log(message.style.backgroundColor);

//to get value of styles
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// working with css variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes - you can only access expected properties
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//non-standard attributes
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

//setting attribute
logo.setAttribute('company', 'Bankist');

//gets the relative location
logo.getAttribute('src');

//relative and absolute
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attributes
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//don't use this:
logo.className = 'juuzo'; //overrides all classes
 */

/************************************************/
/* TYPES OF EVENTS
/************************************************/

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('You are reading the heading :)');

  //to listen to an event once - remove it
  // h1.removeEventListener('mouseenter', alertH1);
};

//mouseenter is like css hover
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// //on event property (old)
// h1.onmouseenter = function (e) {
//   alert('You are reading the heading :)');
// };

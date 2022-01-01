'use strict';

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(node => {
  node.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Page navigation

const btnSCrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnSCrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); // this will change
  // it's relative based on the visual viewport

  console.log('Current scroll (x,y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.nav__link').forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    const id = this.getAttribute('href'); // don't want absolute URL
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// This is potentialyl inefficinet so we're going to use event delegation

// 1. Add event listener to common parent elemetn
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed component
// Don't want to do this because we don't want to loop over each of these
// We want to actually access the parent (i.e. the tab contianer) and then attack it from there
// tabs.forEach( tab => tab.addEventListener('click', () => {
// });

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('operations__tab-container');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
// want to do event delegation
// so again focusing on the parent
// also want to work with the logo
// use the entire nav bar

// lets refactor our code

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // use the closest method hear to search for parents
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// These look ugly. Lets use bind method
// nav.addEventListener('mouseover', (function) (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1.0);
// });

// Passing an "argument" into handler
// Any handler function can only ever have one real parameter
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

  // performance bad with this approach
});

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

// headerObserver.observer(header);

// 195. Revealing Elements on Scroll
/*
Reveal each section as we approach it
Slides in
Going to add class through css
.section--hiden
*/

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
const allSections = document.querySelectorAll('.section');

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  // Stop observing because we've already done our task
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// Slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const maxSlide = slides.length;
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-300px)';
  // // slider.style.overflow = 'visible';
  // slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    }
    curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  // console.log(btnRight);
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(curSlide);
    }
  });
};
slider();

/******************************
        LECTURE NOTES
 ******************************/
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector('.header'); // selects the first header
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// // This HTML collection updates automatically
// // so it will be updated and refreshed if there are changes to the UI

// console.log(document.getElementsByClassName('btn'));

// const message = document.createElement('div'); // creates a DOM element
// // not yet in the DOM though!
// // we would need to manually insert it
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button";';
// header.prepend(message);
// // header.append(message); // can't be in two places at once, so whichever one is second takes precedence
// // header.append(message.cloneNode(true));

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// // Set as inline style elements

// console.log(message.style.height); // doesn't log anything because it's not defined inline... in this manner at least

// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // Get computed style can become very helpful
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.setAttribute('company', 'Bankist');

// const link = document.querySelector('.twitter-link');
// console.log(link.href); // ABSOLUTE path
// console.log(link.getAttribute('href')); // RELATIVE path

// // Data attributes
// // must start with data
// console.log(logo.CDATA_SECTION_NODE.versionNumber);

// // Classes
// // logo.classList.add();
// // logo.classList.remove();
// // logo.classList.toggle();
// // logo.classList.contains();

// // 186.Types of Events and Event Handlers
// // mouse enter event

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :)');
//   h1.removeEventListener('mouseenter', alertH1); // only listen to the event once
// };

// h1.addEventListener('mouseenter', alertH1);

// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: Great! You are reading this heading');
// // };

// // Used to be done this second way... but now the first way is a bit more common
// // We can remove an event listener in the first one

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target);

//   // Stop propagation
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget); // current target === this
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true //useCapture event ; so only listens to capture events instead of bubble events
// );

// // We can also stop the event propagation

// // 189. Event Delegation : Implementing Page Navigation

// // 190. DOM Traversing

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// // only the first child gets the white

// // Going upwards : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // multiple headerrs, we just want to find the parent element
// // receives a query string
// // just traverses the Element and its parents (heading toward the doc root)
// // querySelector findds children
// // closest finds parents

// // Going sideways: siblings
// // can only access direct siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling); // this is the next NODE
// console.log(h1.nextSibling);

// // can move up to the parent element and then get all the nodes
// console.log(h1.parentElement.children); // all of the siblings
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     // Comparisons between elements work totally fine
//     el.style.transform = 'scale(0.5)';
//   }
// });

// //191. Building a Tabbed Component
// /*
// Each tab is itself a button

// */

// // 194. A Better Way: The Intersection Observer API
// // const obsCallback = function (entires, observer) {
// //   //

// //   entires.forEach(entry => {
// //     console.log(entry);
// //   });
// // };

// // const obsOptions = {
// //   root: null, // looking at the whole viewpoint because this is nulll
// //   threshold: [0, 0.2], // percentage of intersection when the observer callback will be called
// // };
// // const observer = new IntersectionObserver(obsCallback, obsOptions);
// // observer.observe(section1);

// // 196. Lazy Loading Images
// // performance is key

// // 197. Building a Slider Component

// // 199. Lifecycle DOM Events

// document.addEventListener('DOMContentLoaded', function (e) {
//   // Doesn't wait for other resources to be loaded
//   console.log('HTML parsed and DOM tree built!!', e);
// });

// // gets fired when the complete page gets loaded
// window.addEventListener('load', function (e) {
//   console.log('Page fully loaded', e);
// });

// window.addEventListener('beforerunload', function (e) {
//   e.preventDefault(); // some browsers require this
//   // created right before a user is about ot leave a page
//   e.returnValue = '';
// });

/*
Regular 
=======
script src="script.js"

Head
----
Parsing HTML | Waiting (Fetch script | execute)| Finish parsing HTML

Body
----
Parsing HTML | Fetch script | Execute 
(better)

Async
=======
<script async src="script.js">

Head
----
Parsing HTML | Waiting | Finish parsing HTML
  Fetch script| Execute| 

Body
----
Doesn't make sense here

Defer
=======
<script defer src="script.js">

Head
-----
Parsing HTML | Execute 
 Fetch script 

Body
-----
Makes no seanse 



*/

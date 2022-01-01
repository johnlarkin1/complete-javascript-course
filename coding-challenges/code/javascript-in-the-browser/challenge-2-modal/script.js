'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // returns NodeList(3)

/*
Query selector only will select the first one... so we need querySelectorAll
*/

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); // removing this class! so very clean way to remove this
  overlay.classList.remove('hidden'); // adds the depth
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
This is a very common thing to do!!
*/

/*
How do we want to respond to keyboard events?

keydown - fired when you press down on the keyboard
keypress - fired continuosly as we keep our finger on a certain key
keyup - fired when the key comes up
*/

document.addEventListener('keydown', function (e) {
  // Event function as an argument
  console.log('A key was pressed');
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

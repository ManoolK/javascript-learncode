'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const changeModalState = function (state) {
  modal.classList[state]('hidden');
  overlay.classList[state]('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    changeModalState('remove');
  });
}

btnCloseModal.addEventListener('click', function () {
  changeModalState('add');
});
overlay.addEventListener('click', function () {
  changeModalState('add');
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape' && !modal.classList.contains('hidden'))
    changeModalState('add');
});

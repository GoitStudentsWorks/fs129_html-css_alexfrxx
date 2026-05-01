'use strict';

const burger = document.querySelector('.burger'),
  openBtn = document.querySelector('.openBtn'),
  closeBtn = document.querySelector('.closeBtn');

openBtn.addEventListener('click', () => {
  burger.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  burger.classList.remove('is-open');
});

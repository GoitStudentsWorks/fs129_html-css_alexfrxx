'use strict';

const burger = document.querySelector('.burger'),
  openBtn = document.querySelector('.burger-btn'),
  closeBtn = document.querySelector('.burger-close-btn'),
  links = document.querySelectorAll('.burger-link'),
  orderBtn = document.querySelector('.burger-cta-btn');

openBtn.addEventListener('click', () => {
  burger.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  burger.classList.remove('is-open');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('is-open');
  });
});

orderBtn.addEventListener('click', () => {
  burger.classList.remove('is-open');
});

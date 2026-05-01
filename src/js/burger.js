'use strict';

const burger = document.querySelector('.burger');

document.querySelector('.openBtn').addEventListener('click', openBurger);
document.querySelector('.closeBtn').addEventListener('click', closeBurger);

function openBurger() {
  burger.classList.add('is-open');
}

function closeBurger() {
  burger.classList.remove('is-open');
}

'use strict';
const log = console.log;
let borderWidth = document.getElementById('borderWidth');
let borderRadius = document.getElementById('borderRadius');
let colorRadios = document.getElementById('colorRadios');

colorRadios.addEventListener('click', (e) => {
  if (e.target.value) {
    let boxes = document.getElementsByClassName('box');
    for (let box of boxes) {
      box.style.borderColor = e.target.value;
    }
  }
});
borderWidth.addEventListener('change', (e) => {
  let boxes = document.getElementsByClassName('box');
  let width = e.target.value + 'px';
  for (let box of boxes) {
    box.style.borderWidth = width;
  }
});
borderRadius.addEventListener('change', (e) => {
  log(e.target.value);
  let boxes = document.getElementsByClassName('box');
  let width = e.target.value + 'px';
  for (let box of boxes) {
    box.style.borderRadius = width;
  }
});

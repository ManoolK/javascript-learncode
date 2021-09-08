'use strict';

///////////////////////////////////////
// Challenge #2

const img = document.querySelector('.images');
let currentImage;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    currentImage = document.createElement('img');
    currentImage.src = imgPath;
    currentImage.addEventListener('load', function () {
      img.appendChild(currentImage);
      resolve(currentImage);
    });
    currentImage.addEventListener('error', function () {
      reject(new Error(`The image not found!`));
    });
  });
};

createImage('img/img-1.jpg')
  .then(image => {
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(image => {
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(image => {
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(`Something went wrong! ${err.message}`));

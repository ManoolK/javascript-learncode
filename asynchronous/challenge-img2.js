'use strict';

///////////////////////////////////////
// Challenge #2

const img = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const currentImg = document.createElement('img');
    currentImg.src = imgPath;
    currentImg.addEventListener('load', function () {
      img.appendChild(currentImg);
      resolve(currentImg);
    });
    currentImg.addEventListener('error', function () {
      reject(new Error(`The image not found!`));
    });
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-3.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(`Something went wrong! ${err.message}`);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);
    const allElems = await Promise.allSettled(imgs);
    allElems.forEach(elem => elem.value.classList.add('parallel'));
  } catch (err) {
    console.error(`Something went wrong! ${err.message}`);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// loadNPause();

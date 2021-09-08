'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Test Event loop
// console.log('Test start'); // 1
// setTimeout(() => console.log('0 sec timeput'), 0); // 5 callback queue
// Promise.resolve('resolved promice 1').then(res => console.log(res)); // 3 microtasks queue
// Promise.resolve('resolved promice 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// }); // 4 microtasks queue
// console.log('Test end'); // 2

///////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span> ${(
            +data.population / 1000000
          ).toFixed(1)}M people</p>
          <p class="country__row"><span>🗣️</span> ${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span> ${data.currencies[0].name}</p>
      </div>
  </article>  
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

////////////////////////////////////////////////////
// most old-school

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
  });
};

// getCountryData('russia');
// getCountryData('netherlands');
// getCountryData('usa');

const getCountryAndNeighbor = function (country) {
  // most old-school
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // Render country I
    renderCountry(data);
    // Get neighbor country II
    const [neighbor] = data.borders;
    if (!neighbor) return;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbor('russia');
// getCountryAndNeighbor('canada');

////////////////////////////////////////////////////
// modern way - Promise

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData2 = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    `Country '${country}' not found!`
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error('No neighbour found');

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        `Neighbour country '${neighbor}' not found!`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} 🔥🔥🔥`);
      renderError(`Something went wrong: ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   // getCountryData2('russia');
//   getCountryData2('australia');
//   // getCountryData2('jhfdtyjkhjkh');
// });

///////////////////////////////////////

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('We have a Problem!')).catch(err => console.log(err));

///////////////////////////////////////

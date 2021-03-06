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

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('We have a Problem!')).catch(err => console.log(err));

///////////////////////////////////////
// Async/Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  let outStr = '';

  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Too many requests!`);
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem getting country!`);
    const data = await res.json();
    renderCountry(data[0]);
    outStr = `You're in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    outStr = `🔥🔥🔥 ${err.message}`;
    renderError(outStr);
    throw err;
  } finally {
    countriesContainer.style.opacity = 1;
    return outStr;
  }
};

console.log('1: Will get location');
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err}`);
  } finally {
    console.log('3: Finished getting location');
  }
})();

// running in parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('russia', 'canada', 'tanzania');

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
    getJSON(`https://restcountries.eu/rest/v2/name/france`),
    timeout(0.2),
  ]);
  console.log(res[0]);
})();

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any
Promise.any([
  Promise.resolve('Success (any)'),
  Promise.reject('Error (any)'),
  Promise.resolve('Another success (any)'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

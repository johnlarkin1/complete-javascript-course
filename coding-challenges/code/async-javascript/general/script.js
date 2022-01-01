'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const BASE_URL = 'https://restcountries.com/v2';

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people </p>
        <p class="country__row"><span>🗣</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Old school

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `${BASE_URL}/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people </p>
//         <p class="country__row"><span>🗣</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `${BASE_URL}/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);

//     // render main country
//     renderCountry(data);

//     // get neighbor country
//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `${BASE_URL}/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

/*
Want to be careful about nested callback functions
Makes asynch stuff synch

promises are our way around this
*/
// getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');

const request = fetch(`${BASE_URL}/name/portugal`);

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(errorMsg);
    return res.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`${BASE_URL}/name/${country}`)
//     .then(
//       res => {
//         if (!res.ok) {
//           throw new Error(`Country not found (${res.status})`);
//         }
//         return res.json();
//       }
//       // err => alert(err)
//     ) // also async ... so will return a new promise)
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders[0];
//       if (!neighbor) return;
//       return fetch(`${BASE_URL}/alpha/${neighbor}`);

//       // DO NOT chain here. That would lead to callback hell.
//       // Return the promise and THEN continue the chain.
//     })
//     .then(res => res.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => renderError(err))
//     .finally(() => {
//       console.log(
//         'The finally is always called here. It also only works on promises. A good example is hiding a spinner once the application completes'
//       );
//       countriesContainer.style.opacity = 1;
//     }); // this is saying for any error that occurs catch it and solve
// };

// getCountryData('australia');

// going to add the neighbor functionality now
// and we'll see how it gets rid of callback hell

const getCountryData = function (country) {
  getJSON(`${BASE_URL}/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error('no neighbor');
      return getJSON(`${BASE_URL}/alpha/${neighbor}`, 'Country not found');

      // DO NOT chain here. That would lead to callback hell.
      // Return the promise and THEN continue the chain.
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => renderError(err))
    .finally(() => {
      console.log(
        'The finally is always called here. It also only works on promises. A good example is hiding a spinner once the application completes'
      );
      countriesContainer.style.opacity = 1;
    }); // this is saying
};

// btn.addEventListener('click', () => getCountryData('australia'));

// This inner function is the executo function
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening!!');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win!');
    } else {
      reject(new Error('You lost!'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

/*
Promisifying -> 
converting async behaviors into promises
*/

// Promisifying setTimeout
const wait = function (seconds) {
  return newPromise(resolve => setTimeout(resolve, seconds * 1000));
};

wait(2).then(() => {
  console.log('I waited for two seconds');
  return wait(1);
});

Promise.resolve('Resolves immediately').then(x => console.log(x));
Promise.reject('Resolves immediately').catch(x => console.error(x));

// offloads to the WebAPI
// code is not blocked
console.log('getting position'); // this is logged first

const getPosition = function () {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Just promisified the geo based API
getPosition().then(pos => console.log(pos));

const whereAmI = async function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (res.status === 403) throw new Error('Too many requests made!');
      return res.json();
    })
    .then(data => {
      // console.log(`You are in ${data.city}, ${data.country}`);
      const countryUrl = `${BASE_URL}/name/${data_1.country}`;
      return renderCountry(data_2[0]);
    })
    .catch(err => {
      return console.log(`Received err: ${err}`);
    });
};

btn.addEventListener('click', whereAmI);

// async means that this is going to be running in the background
// we can have multiple await statements

// isn't stopping the code causing a block?
// no, not blocking the call stack / main thread
// it makes our code look like sync code but it's async
// as soon as the promise here is resolved, the value of this whole await expression is going to be the resolved value of the promise

// behind the scenes still using promises
/*
  these two are the same

  fetch(url).then(res => console.log(res));
*/

const whereAmI = async function (country) {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    const res = await fetch(`${BASE_URL}/name/${dataGeo.country}`);
    const data = await res.json();
    console.log(res);
    renderCountry(data[0]);
  } catch (error) {
    console.error(error);
    renderError('error message');
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);
whereAmI().then(city => console.log(city));
console.log('3: Finished getting location');

/*
ASYNC FUNCTION ALWAYS RETURNS A PROMISE 
*/

// async IIFE
(async function () {
  try {
    const city = await whereAmI();
  } catch (err) {
    console.error(2, err.message);
  }
  console.log('3: Finished getting location');
})();

// running promises in parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // // Run these three in parallel
    // const [data1] = await getJSON(
    //   `${BASE_URL}/name/${c1}`,
    //   'Country not found'
    // );
    // const [data2] = await getJSON(
    //   `${BASE_URL}/name/${c2}`,
    //   'Country not found'
    // );
    // const [data3] = await getJSON(
    //   `${BASE_URL}/name/${c3}`,
    //   'Country not found'
    // );

    const data = await Promise.all([
      getJSON(`${BASE_URL}/name/${c1}`),
      getJSON(`${BASE_URL}/name/${c2}`),
      getJSON(`${BASE_URL}/name/${c3}`),
    ]);

    // Promise.all rejects whenever you have multiple async operations and one fails

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

//263. Other Promise Combinators: race, allSettled,and any

//Promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`${BASE_URL}/name/italy`),
    getJSON(`${BASE_URL}/name/egypt`),
    getJSON(`${BASE_URL}/name/mexico`),
  ]);

  // Promise.race shortcircuits when we get a return if it fails or succeeds
  // we will only get the fastest one that comes back first
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`${BASE_URL}/name/egypt`), timeout(1)]);

// Promise.allSettled
/*
Takes in an array of promises 
Returns an array 
Does NOT short circuit 
It will return all the results of all the promises 

*/

Promise.allSettled([
  Promise.resolve('Succes'),
  Promise.reject('Error'),
  Promise.resolve('another success'),
]).then(res => console.log(res));

// Promise.any
/*
Promise.any takes in an array 
Returns the first fulfilled promise 
Similar to Promise.race

*/

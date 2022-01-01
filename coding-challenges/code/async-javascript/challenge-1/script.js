'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
Part 1
1. Create a function `whereAmI` which takes as inputs a lat and long.
2. Do a `reverse geocoding` of the provided coordinates. Convert to a meaninful location. Use geocode.xyz/api
AJAX call will be done to a URL with this format:
https://geocode.xyz/${lat},${long}?geoit=json.
Use the fetch API and promises to get the data. Do NOT use the getJSON function we created. 
3. Log a message of where you are. 
4. Create  catch method and log errors to the consoler 
5. API allows you to mkake 3 requests per second. Create an error to reject the promise yourself, with a meaningful error message. 

Part 2
6. Render the country
7. 
*/

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

const test1 = [52.508, 13.381];
const test2 = [19.037, 72.873];
const test3 = [-33.933, 18.474];

const whereAmI = function (lat, long) {
  const url = `https://geocode.xyz/${lat},${long}?geoit=json`;
  return fetch(url)
    .then(res => {
      if (res.status === 403) throw new Error('Too many requests made!');
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      // renderCountry(data.country);
      const countryUrl = `${BASE_URL}/name/${data.country}`;
      return fetch(countryUrl);
    })
    .then(res => res.json())
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`Received err: ${err}`));
};

const country = whereAmI(...test1);
console.log(country);

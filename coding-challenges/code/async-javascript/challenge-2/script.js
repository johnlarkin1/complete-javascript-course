'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
Part 1
1. Create a function createImage which receives imgPath as an input. Fcn returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. 
When the img is done loading, append it to the DOM element with the images class, and resolve the promise. The fulfilled value should be the image itself. In case there is an error loading the image ('error' event), reject the promise. 

Part 2
2. Consume the promise using .then and add an error handled 
3. After the image has loaded, puase execution for 2 seconds using the wait function. 
4. After 2 seconds have passed, hide the current image (set display to none) and load a second image). 
5. After the second image has loaded, pause execution for 2 seconds again. 
6. After the 2 seconds have passed, hide the current image
*/

const imgContainer = document.querySelector('.images');

let currentImg;
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      // NOW we append it to the dom element with the images class
      imgContainer.append(img);
      resolve(img); // we resolve the promise
      // this is where we mark it as successful
    });

    img.addEventListener('error', () => {
      reject(new Error('image not found'));
    });
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

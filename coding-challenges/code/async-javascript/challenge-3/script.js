'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
PART 1 
1. Write an async function loanNPause that recreates Challenge 2, this time using async and await (reuse the createImage function from before)
2. Compare the two versions, see which youlike more 
3. Don't forget to test the error handler, and to set the network speed to Fast 3g in the dev tools 

PART 2
1. Create an async function `loadAll` that receives an array of image paths
2. Use .map to loop over to load all the images with the createImage function (call result 'imgs')
3. Check out the 'imgs' array in the conosle 
4. Use a promise combinator to actually get the images
5. Add the parallel class to all the iamges 
*/

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg'];

const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const imgContainer = document.querySelector('.images');

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

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

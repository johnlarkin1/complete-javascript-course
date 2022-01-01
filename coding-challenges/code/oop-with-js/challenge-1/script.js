'use strict';

/*
Use a construction function to implement a Car. 

1. Car has a make and a speed property. 
2. Implement an accelerate method that will increase the car's speed by 2 and log the new speed. 
3. Implement a brake method that wil decrease by 5 and log. 
4. Create 2 car objects and experiment 
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Accelerating. New speed is ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Braking. New speed is ${this.speed}`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.brake();

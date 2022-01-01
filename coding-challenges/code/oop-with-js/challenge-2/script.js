'use strict';

/*
1. Re-create challenge 1, but this time using an ES6 class
2. Add a getter called speedUS which returns the current speed in mi/h
3. Add a setter called speedUS which sets the current speed in mi/h but converts it to km/h before storing the value by mult the inptu by 1.6
4. Creat a new car and experiemtn with all methods
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Accelerating. New speed is ${this.speed}`);
// };

// Car.prototype.brake = function () {
// this.speed -= 5;
// console.log(`Braking. New speed is ${this.speed}`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car2.brake();

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Accelerating. New speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Braking. New speed is ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

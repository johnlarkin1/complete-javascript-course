'use strict';

/*
Coding Challenge 4

1. Re-create challenge #3, but this time using ES6 classes. Create an EVCl child class of the CarCl class. 
2. Make the charge property private. 
3. Implement the ability to chain the accelerate and chargeBattery methods and also the brake. 

*/

class CarCl {
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

class ElectricCarCl extends CarCl {
  #batteryCharge;

  constructor(batteryCharge, make, speed) {
    super(make, speed);
    this.#batteryCharge = batteryCharge;
  }

  chargeBattery(chargeTo) {
    this.#batteryCharge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#batteryCharge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#batteryCharge
      }%.`
    );
    return this;
  }

  brake() {
    CarCl.prototype.brake.call(this);
    return this;
  }
}

const t = new ElectricCarCl(85, 'Tesla', 120);
t.accelerate().accelerate().accelerate().chargeBattery(100).brake();
console.log(t);

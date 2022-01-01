'use strict';

/*
1. Use a constructor function to implement an Electric Car class (called EV) as a CHILD class of car. EV also has the current battery charge in %. 
2. Implement a charge battery method which takes a argument chargeTo and sets the battery charge to chargeTo
3. Impplement an accelerate method that will increase the car's speed by 20 and decrease the charge by 1%. THen log these.
4. Create an electric car object and exp with all of these. 
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

const ElectricCar = function (batteryCharge, make, speed) {
  Car.call(this, make, speed);
  this.batteryCharge = batteryCharge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.batteryCharge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.batteryCharge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.batteryCharge}%.`
  );
};

const t = new ElectricCar(85, 'Tesla', 120);
t.accelerate();
t.accelerate();
t.accelerate();
t.accelerate();
t.accelerate();
t.chargeBattery(100);
t.accelerate();
t.brake();

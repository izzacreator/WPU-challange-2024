// WPU challange 2024
// 5/366

// const zeroFuel =  ( distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// }

// const zeroFuel =  ( distanceToPump, mpg, fuelLeft) => {
//   return fuelLeft / mpg >= distanceToPump;
// }

const zeroFuel =  ( distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(100, 50, 1));

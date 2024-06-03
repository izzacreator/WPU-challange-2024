// WPU challange 2024
// 8/366

// var countSheep = function (num) {
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += i + ' sheep...';
//   }
//   return result;
// }

const countSheep = (num) => [...Array(num)].map((el, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(3));
// WPU challange 2024
// 4/366

// function smash (words) {
//   return words.join(' ');
// }

// function smash (words) {
//   let result = '';
//   for (let i = 0; i < words.length; i++) {
//     result += words[i]; 
//       result += ' ';
//   }
//   return result
// }

const smash = (words) => words.join(' ');

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
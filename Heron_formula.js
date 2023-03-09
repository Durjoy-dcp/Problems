/*
Question 
https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript
*/
function heron(a, b, c) {
  let s = a + b + c;
  s = s / 2;

  return parseFloat(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
}
console.log(heron(3, 4, 5));

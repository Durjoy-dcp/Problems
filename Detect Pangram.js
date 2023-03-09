/*
Question
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
*/
function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.includes(x));
}

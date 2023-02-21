// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddEven(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, char) {
  let result;
  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index];
    if (currentChar === char) {
      result = index;
      break;
    }
  }
  return result;
}
console.log(charCount("hello", "l"));
// result should be: 2

function charCountLastPosition(word, char) {
  let result;
  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index];
    if (currentChar === char) {
      result = index;
    }
  }
  return result;
}

console.log(charCountLastPosition("mama", "m"));
// result should be: 2

function charCountAllE(word, char) {
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    const currentChar = word[index];
    if (currentChar == char) {
      result = count++;
    }
  }
  return count;
}
console.log(charCountAllE("Resümee", "e"));
// result should be: 3

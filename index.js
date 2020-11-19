// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...

console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
const capitalizeFirstLetter = (str) => {
  const word_arr = str.split(' ');
  const result_arr = [];
  word_arr.forEach(([firstLetter, ...remaining]) => {
    let capitalized = firstLetter.toUpperCase() + remaining.join('');
    result_arr.push(capitalized);
  })

  return result_arr.join(' ');
};
console.log(capitalizeFirstLetter(sentence));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1,2));
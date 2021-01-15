function reverseWords(str){
  let reverse = '';
  let array = str.split(' ');
  for (i = array.length - 1; i >= 0; i--) {
    reverse += ' ' + array[i];
  };
  return reverse;
};

console.log(reverseWords("The greatest victory is that which requires no battle"))


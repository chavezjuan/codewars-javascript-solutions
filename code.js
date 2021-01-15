var maxSequence = function(arr) {
  let sums = [];
  if (arr.every(value => value < 0)) {
    return 0; 
  } else {
    for (let num = 0; num < arr.length; num++) {
      let acc = arr[num];
      for (let next = num + 1; next < arr.length - 1; next++) {
        acc += arr[next];
        sums.push(acc);
      }; 
    };
    return sums.reduce((a, b) => { return Math.max(a, b) }, 0)   
  };
} 

console.log(maxSequence([4,5,2,1]));

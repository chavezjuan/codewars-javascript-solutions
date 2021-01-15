function score( dice ) {
  let score = 0;
  
  const distincValues = dice.filter((value, index) => dice.indexOf(value) == index);
  
  let occurrences = new Object();
  
  for (let number of distincValues) {
    occurrences[number] = dice.reduce((total, x) => (x==number ? total+1 : total), 0);
  };
  
  for (let i of Object.entries(occurrences)) {
    if (i[1] === 1 & i[0] === 1 || i[0] === 5) {
      if (i[0] === 1) {
        score += 100;
      } else {
        score += 50
      };
    } else {
      if (i[])
    }
  }
  
  
}

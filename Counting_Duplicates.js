function duplicateCount(text){
  const characters = text.toLowerCase();
  let counter = 0;
  
  if (!text === "") {  
    for (let char of characters) {
      characters.match(`/${char}/g`).length > 1 ? counter += 1 : null;
    };   
    
    return counter;
  } else {
    
    return 0;
  };
};


function rot13(message){
  
  let codified = '';
  
  // console.log(message.charCodeAt(0));
  
  for (let index in message) {
    // codified += String.fromCharCode(message.charCodeAt(index) - 13);
    codified += String.fromCharCode(message.codePointAt(index) - 13);
  };
  
  return codified;
  
}

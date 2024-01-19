function sortCharacters(inputString) {
    const letters = [];
    const digits = [];
    const specialChars = [];
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (/[a-zA-Z]/.test(char)) {
        letters.push(char);
      } else if (/[0-9]/.test(char)) {
        digits.push(char);
      } else {
        specialChars.push(char);
      }
    }
  
    const resultArray = letters.concat(digits, specialChars);
  
    return resultArray;
  }
  
  const inputString = "Hello123!";
  
  const resultArray = sortCharacters(inputString);
  console.log("Mảng kết quả:", resultArray);
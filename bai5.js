function capitalizeLastLetterOfEachWord(inputString) {
    const words = inputString.split(" ");
  
    const modifiedWords = words.map((word) => {
      const lastChar = word.slice(-1).toUpperCase();
      const restOfWord = word.slice(0, -1);
      return restOfWord + lastChar;
    });
  
    const resultString = modifiedWords.join(" ");
  
    return resultString;
  }
  
  const inputString = "Hello world";
  
  const result = capitalizeLastLetterOfEachWord(inputString);
  console.log("Chuỗi kết quả:", result);
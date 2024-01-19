function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function printPrimeNumbers(arr) {
    console.log("Các số nguyên tố trong mảng:");
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        console.log(arr[i]);
      }
    }
  }
  
  const integerArray = [2, 5, 7, 11, 13, 4, 9, 17, 19];
  
  printPrimeNumbers(integerArray);
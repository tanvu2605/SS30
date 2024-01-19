function isOdd(number) {
    return number % 2 !== 0;
  }
  
  function printOddNumbersSum(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      if (isOdd(i)) {
        console.log(i);
        sum += i;
      }
    }
  
    if (!isOdd(sum)) {
      console.log(1);
      sum += 1;
    }
  
    console.log(`Tổng các số: ${sum}`);
  }
  
  const n = 10;
  
  if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
  } else {
    console.log(`Các số nguyên dương lẻ nhất từ 0 đến ${n}:`);
    printOddNumbersSum(n);
  }
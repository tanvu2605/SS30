function findTripletWithSum(arr, targetSum) {
    const n = arr.length;
  
    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] === targetSum) {
            return [arr[i], arr[j], arr[k]];
          }
        }
      }
    }
  
    return [];
  }
  
  const integerArray = [1, 2, 3, 4, 5, 6];
  const targetSum = 11;
  
  const result = findTripletWithSum(integerArray, targetSum);
  if (result.length > 0) {
    console.log("Ba phần tử có tổng bằng", targetSum, ":", result);
  } else {
    console.log("Không tìm thấy ba phần tử có tổng bằng", targetSum);
  }
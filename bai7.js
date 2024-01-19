function findSubarrayGreaterThanSum(arr, targetSum) {
    let currentSum = 0;
    let minLength = Infinity;
    let startIndex = 0;
    let subarray = [];
  
    for (let endIndex = 0; endIndex < arr.length; endIndex++) {
      currentSum += arr[endIndex];
  
      while (currentSum > targetSum) {
        if (endIndex - startIndex + 1 < minLength) {
          minLength = endIndex - startIndex + 1;
          subarray = arr.slice(startIndex, endIndex + 1);
        }
  
        currentSum -= arr[startIndex];
        startIndex++;
      }
    }
  
    return subarray;
  }
  
  const integerArray = [1, 2, 3, 4, 5, 6];
  const targetSum = 10;
  
  const result = findSubarrayGreaterThanSum(integerArray, targetSum);
  console.log("Mảng con có tổng lớn hơn", targetSum, ":", result);
function isPalindromeArray(arr) {
    for(let i = 0; i<arr.length / 2; i++) {
        if (arr[i] != arr[arr.length -1 -i]){
            return false;
        }
    }
    return true;
}
const myArray = [1, 2, 3, 2, 1];
const result = isPalindromeArray(myArray);
console.log(result);

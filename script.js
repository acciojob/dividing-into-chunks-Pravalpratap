const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      // If adding arr[i] exceeds the sum n, push the current subarray to the result
      result.push(currentSubarray);
      // Start a new subarray
      currentSubarray = [];
      currentSum = 0;
    }
    // Add the current element to the subarray
    currentSubarray.push(arr[i]);
    currentSum += arr[i];
  }

  // Push the last subarray if it has any elements
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

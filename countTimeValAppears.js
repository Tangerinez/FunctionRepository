function countValue(arr, value) {
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

// returns the number of times a value appears in an array

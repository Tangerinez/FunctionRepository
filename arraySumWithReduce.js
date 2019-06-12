function simpleArraySum(ar) {
  let sum = ar.reduce((a, b) => {
    return a + b;
  });
  return sum;
}
// reduce takes in (acc,val,i,arr)
// first argument is a callback function
// second argument is the nth element

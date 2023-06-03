function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // split the array in 2
  const mid = Math.floor(arr.length / 2); // [13, 5, 1, 65, 2, 7]
  const left = arr.slice(0, mid); // [13, 5, 1]
  const right = arr.slice(mid); // [65, 2, 7]
  return merge(mergeSort(left), mergeSort(right));
}
// merge( mergeSort([13, 5, 1]), mergeSort([65, 2, 7]) )

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) { // compare the index of both arrays
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([13, 5, 1, 65, 2, 7, 155, -5]))
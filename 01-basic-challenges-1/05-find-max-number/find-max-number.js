function findMaxNumber(arr) {
  // let maxNum = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   if (maxNum < arr[i]) {
  //     maxNum = arr[i];
  //   }
  // }
  // return maxNum;

  return Math.max(...arr);
}

console.log(findMaxNumber([1, 4, 8, 2, 4, 94, 1, 4, 5, 3]));

module.exports = findMaxNumber;

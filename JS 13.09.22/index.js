let leftIdx = 0;
let left = 0;
let right = 0;
let result = 0;

function loadGrain(numArr) {
  let rightIdx = numArr.length - 1;

  while (leftIdx < rightIdx) {
    left = numArr[leftIdx] > left ? numArr[leftIdx] : left;

    right = numArr[rightIdx] > right ? numArr[rightIdx] : right;

    left >= right
      ? ((result += right - numArr[rightIdx]), rightIdx--)
      : ((result += left - numArr[leftIdx]), leftIdx++);
  }
  console.log(result);
  return result;
}

// loadGrain([30, 44, 6, 17, 49, 30, 20, 26, 47, 44, 28, 6, 9, 9, 25, 23, 22, 10]); // 181
// loadGrain([2, 1, 5, 2, 7, 4, 10]); // 7
// loadGrain([2, 0, 1, 5, 2, 7]); // 6
// loadGrain([4, 0, 1, 3]); // 5
// loadGrain([4, 1, 3]); // 2
// loadGrain([5, 5, 2]); // 0
// loadGrain([2, 4, 2]); // 0
// loadGrain([90, 80]); // 0
// loadGrain([]); // 0

let biggestNum = 0;
let totalGrain = 0;

function loadGrain(numArr) {
  for (let num of numArr) {
    biggestNum < num
      ? (biggestNum = num)
      : biggestNum > numArr[numArr.length - 1]
      ? (totalGrain = totalGrain + numArr[numArr.length - 1] - num)
      : (totalGrain = totalGrain + biggestNum - num);
  }

  if (totalGrain < 0) {
    totalGrain = 0;
  }

  // console.log(totalGrain);
  return totalGrain;
}

// loadGrain([2, 1, 5, 2, 7, 4, 10]); // 7
// loadGrain([2, 0, 1, 5, 2, 7]); // 6
// loadGrain([4, 0, 1, 3]); // 5
// loadGrain([4, 1, 3]); // 2
// loadGrain([5, 5, 2]); // 0
// loadGrain([2, 4, 2]); // 0
// loadGrain([7, 4]); // 0
// loadGrain([]); // 0

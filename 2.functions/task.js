'use strict'
// Задание 1
function getArrayParams(arr) {
  //let min, max, sum, avg;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
       max = arr[i];
    } if (arr[i] < min) {
        min = arr[i];
    }
    sum += arr[i];
  }

  let avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let result = max;

  for (let i = 0; i < arrOfArr.length; i++) {
    result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
     }
   } 
  return max;
}


// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = min;
  for (let i = 1; i < arr.length; ++i) {
      if (arr[i] > max) { 
        max = arr[i];
      } 
      if (arr[i] < min) {
        min = arr[i]; 
      }
  } 
  return Math.abs(max - min);
}

 

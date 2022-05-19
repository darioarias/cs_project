function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function InsertionSort(arr, arrLength) {
  let copy = [...arr];
  let animations = [];
  for (let i = 1; i < arrLength; i++) {
    let j = i - 1;
    while (j >= 0 && copy[j] > copy[j + 1]) {
      animations.push([j, j + 1, "swap"]);
      swap(copy, j, j + 1);
      j--;
    }
  }
  return [animations, copy];
}

function BubbleSort(arr, arrLength) {
  let animations = [];
  let copy = [...arr];
  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (copy[j] > copy[j + 1]) {
        animations.push([j, j + 1, "swap"]);
        swap(copy, j, j + 1);
      }
    }
  }
  return [animations, copy];
}

function SelectionSort(arr, arrLength) {
  let animations = [];
  let copy = [...arr];

  for (let i = 0; i < arrLength - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < arrLength; j++) {
      animations.push([min_idx, j, "compare"]);
      if (copy[j] < copy[min_idx]) min_idx = j;
    }
    swap(copy, min_idx, i);
    animations.push([min_idx, i, "swap"]);
  }
  return [animations, copy];
}

export { InsertionSort, BubbleSort, SelectionSort };

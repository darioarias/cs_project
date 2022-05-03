function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function InsertionSort(arr, arrLength) {
    let copy = [...arr];
    const animations = [];
    for (let i = 1; i < arrLength; i++)
    {
      let j = i - 1;
      while (j >= 0 && copy[j] > copy[j+1])
      {
      //  animations.push([j, j + 1, "compare"]);
        animations.push([j, j + 1, "swap"]);
        swap(copy, j, j + 1);
        j--;
      }
    }
    return animations;
  }

  export { InsertionSort };
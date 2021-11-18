const Sort = () => {
  // let a = "A값";
  // let b = "B값";

  // // a = b
  // // b = a
  // const temp = a;
  // a = b;
  // b = temp;

  // console.log("A:", b);
  // console.log("B:", a);

  const arr = [7, 2, 12, 22, 55, 1, 39, 17];
  // for (let j = arr.length - 2; j >= 0; j--) {
  //   for (let i = 0; i <= j; i++) {
  //     if (arr[i + 1] < arr[i]) {
  //       const temp = arr[i];
  //       arr[i] = arr[i + 1];
  //       arr[i + 1] = temp;
  //       console.log(arr);
  //     }
  //   }
  // }

  for (let j = 0; j < arr.length; j++) {
    let minIndex = j;

    for (let i = j + 1; i < arr.length; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i;
        console.log(minIndex);
      }
    }
    const temp = arr[j];
    arr[j] = arr[minIndex];
    arr[minIndex] = temp;
  }

  console.log(arr);

  return <>Let's Sort</>;
};

export default Sort;

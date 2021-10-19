let flag = true;

const makeNum = () => {
  const randomNum = Math.floor(Math.random() * 45 + 1);
  return randomNum;
};

const makeNumList = () => {
  if (!flag) return;
  flag = false;

  const numList = [];

  for (let i = 0; i <= 6; i++) {
    let num = makeNum();

    while (numList.includes(num)) {
      num = makeNum();
    }
    numList.push(num);
  }

  const sortedNumbers = numList.sort((a, b) => a - b);

  for (let i = 0; i <= 6; i++) {
    const numberOne = document.getElementsByClassName("lotto-num")[i];

    const randomPrint = () => {
      const num = makeNum();
      numberOne.innerHTML = num;
      numberOne.classList = "lotto-num";

      const makeItcolorful = addColorClass(num);
      numberOne.classList.add(makeItcolorful);
    };
    const intervalId = setInterval(randomPrint, 100);
    // setTimeout(
    //   () => {
    //     clearInterval(intervalId);
    //     // numberOne.innerHTML = makeNum();
    //     numberOne.innerHTML = sortedNumbers[i];
    //   },
    //   // 첫번째가 1초후에 멈추게 하려면 (i + 1) * 1000
    //   `${i}000`
    // );

    const stopInterval = () => {
      clearInterval(intervalId);
      numberOne.innerHTML = sortedNumbers[i];

      const colorClass = addColorClass(sortedNumbers[i]);
      numberOne.classList.add(colorClass);
      flag = true;
    };
    setTimeout(stopInterval, `${i}000`);
  }
  const addColorClass = (number) => {
    let colorClass;
    if (number <= 10) {
      colorClass = "yellow";
    } else if (number <= 20) {
      colorClass = "blue";
    } else if (number <= 30) {
      colorClass = "red";
    } else if (number <= 40) {
      colorClass = "grey";
    } else if (number <= 45) {
      colorClass = "green";
    }
    return colorClass;
  };
  const ClickNumber = () => {
    const AlertLotto = () => {
      alert("lotto");
    };

    for (let i = 0; i <= 6; i++) {
      const btnNumber = document.getElementsByClassName("lotto-num")[i];
      btnNumber.addEventListener("click", AlertLotto);
    }
  };
  ClickNumber();
};

const btnLotto = document.getElementById("btn-lotto");
btnLotto.addEventListener("click", makeNumList);

// 숫자를 클릭하면 lotto 를 alert, 쌤 코드
// const $lottoNumberlist = document.getElementsByClassName("lotto-num");

// for (let i = 0; i < $lottoNumberlist.length; i++) {
//   $lottoNumberlist[i].addEventListener("click", () => alert("lotto"));
//
//   클릭한 부분의 숫자가 alert되게 하기 1
//   $lottoNumberlist[i].addEventListener("click", () => alert($lottoNumberlist[i].innerHTML));
//   $lottoNumberlist[i].addEventListener("click", (e) => alert(e.target.innerHTML));
// }

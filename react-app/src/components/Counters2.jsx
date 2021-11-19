import { useState } from "react";

const Counters2 = () => {
  const [number, setNumber] = useState(0);

  const numberUp = () => {
    setNumber(number + 1);
  };

  const numberDown = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>현재 카운터 값은 {number}입니다.</h1>

      <button onClick={numberUp}>+1</button>
      <button onClick={numberDown}>-1</button>
    </>
  );
};

export default Counters2;

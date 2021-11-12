import { useState } from "react";

const Counter = ({ name, children }) => {
  const [number, setNumber] = useState(0);
  // 배열의 비구조화 할당, number를 수정할땐 setNumber 함수를 이용해야함
  return (
    <div>
      <p>
        {name}스텝,
        {children}
      </p>
      <span>값: {number}</span>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;

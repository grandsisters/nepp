import { useState } from "react";

const Test2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState(["눈사람"]);

  const inputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const btnClick = () => {
    // alert(`${inputValue}`);
    setArray([...array, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={inputChange} />
      <button onClick={btnClick}>확인</button>
      <ul>
        {array.map((e, i) => (
          <li key={i}>{e} 입니다.</li>
        ))}
      </ul>
    </>
  );
};

export default Test2;

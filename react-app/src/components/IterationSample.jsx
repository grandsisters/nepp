import { useState } from "react";

const IterationSample = () => {
  // const arr = ["눈사람", "얼음", "눈", "바람"];

  const [array, setArray] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleClick = () => {
    setArray([...array, { id: 0, text: text }]);
    setText("");
    console.log(array);
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>추가</button>

      <ul>
        {array.map((e, i) => (
          <li key={i}>{e.text} 입니다.</li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;

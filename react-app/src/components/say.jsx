import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const handleEnter = () => {
    setMessage("어서 오세요.");
  };
  const handleLeave = () => {
    setMessage("안녕히가세요.");
  };
  return (
    <>
      <div>
        <button onClick={handleEnter}>hi</button>
        <button onClick={handleLeave}>bye</button>
        <h1 style={{ color }}>{message}</h1>
      </div>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨강
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파랑
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록
      </button>
    </>
  );
};

export default Say;

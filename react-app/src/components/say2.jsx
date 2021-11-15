import { useState } from "react";

const Say2 = () => {
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState({ color: "black", background: "black" });

  const handleEnter = () => {
    setMessage("어서 오세요.");
  };
  const handleLeave = () => {
    setMessage("안녕히가세요.");
  };
  // const handleColor = (color) => {
  //   setStyle({ color });
  // };
  const handleColor = (color) => {
    setStyle((prev) => ({ ...prev, color }));
  };

  return (
    <>
      <div>
        <button onClick={handleEnter}>hi</button>
        <button onClick={handleLeave}>bye</button>
        <h1 style={style}>{message}</h1>
      </div>
      <button
        style={{ color: "red" }}
        onClick={() => {
          handleColor("red");
        }}
      >
        빨강
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          handleColor("blue");
        }}
      >
        파랑
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          handleColor("green");
        }}
      >
        초록
      </button>
    </>
  );
};

export default Say2;

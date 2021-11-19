import { useState, useEffect, useRef } from "react";

const Info = () => {
  const [userName, setUserName] = useState();
  const [nickName, setNickname] = useState();
  const nameInputEL = useRef(null);
  const fileUp = useRef(null);

  useEffect(() => {
    console.log("최초 렌더링이 완료됐습니다.");
  }, []);

  useEffect(() => {
    console.log("렌더링이 완료됐습니다.");
    console.log({ userName, nickName });
  }, [userName, nickName]);

  const whatYourName = (e) => {
    const x = e.target.value;
    setUserName(x);
  };

  const WhatYourNick = (e) => {
    const x = e.target.value;
    setNickname(x);
  };

  const clear = () => {
    setNickname("");
    setUserName("");
    nameInputEL.current.focus();
  };

  const fileUpload = () => {
    fileUp.current.click();
  };

  return (
    <>
      <input ref={nameInputEL} type="text" value={userName} onChange={whatYourName} />
      <input type="text" value={nickName} onChange={WhatYourNick} />
      <button onClick={clear}>초기화</button>
      <h1>이름 : {userName}</h1>
      <h1>닉네임 : {nickName}</h1>

      <input ref={fileUp} type="file" style={{ display: "none" }} />
      <button onClick={fileUpload}>파일 업로드</button>
    </>
  );
};

export default Info;

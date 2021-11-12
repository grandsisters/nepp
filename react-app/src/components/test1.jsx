import MyComponent from "./MyComponent";
import "./App.css";
import { Fragment } from "react";

// 기존 src/App.js에 있던 코드들

function App() {
  const name = "리액트";
  const jal = "자알";
  const age = 2;

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <Fragment>
      {age || <h1>undefined입니다.</h1>}
      {name === "리액트" ? <h1>리액트 입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
      <h1 style={style}>{name} 안녕!</h1>
      <h2 className="react">{jal} 작동하니?</h2>
      <MyComponent name="React" />
      <MyComponent name="Vue" />
      <MyComponent name="Angular" />
      <MyComponent name="child">여기의 값은 children 이라고 해요.</MyComponent>
    </Fragment>
    // 혹은 Fragment 임폴트 없이 이렇게
    // <>
    //   <h1>리액트 안녕!</h1>
    //   <h2>잘 작동하니?</h2>
    // </>
  );
}

export default App;

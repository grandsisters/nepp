// import Accordian from "./Accordian";
import Dropdown from "./Dropdown";
import React, { useState } from "react";
import Accordian2 from "./Accordian2";
import Carousel from "./Carousel";

// const accordianData = [
//   { id: 1, title: "Title1", content: "asdsdsadawdasdawdasdawd", active: false },
//   { id: 2, title: "Title2", content: "asdsdsadawdasdawdasdawd", active: false },
//   { id: 3, title: "Title3", content: "asdsdsadawdasdawdasdawd", active: false },
//   { id: 4, title: "Title4", content: "asdsdsadawdasdawdasdawd", active: false },
// ];

const Bootstrap = () => {
  // const [data, setData] = useState(accordianData);
  return (
    //   <div style={{ margin: 20, width: 800 }}>
    //     <Accordian data={data} onChange={setData} />
    //   </div>
    // );
    <>
      <Dropdown />
      <Carousel />
      <Accordian2 />
    </>
  );
};

export default Bootstrap;

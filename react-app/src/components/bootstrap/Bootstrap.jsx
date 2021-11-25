import Accordian from "./Accordian";
import React, { useState } from "react";

const accordianData = [
  { id: 1, title: "Title1", content: "asdsdsadawdasdawdasdawd", active: false },
  { id: 2, title: "Title2", content: "asdsdsadawdasdawdasdawd", active: false },
  { id: 3, title: "Title3", content: "asdsdsadawdasdawdasdawd", active: false },
  { id: 4, title: "Title4", content: "asdsdsadawdasdawdasdawd", active: false },
];
const Bootstrap = () => {
  const [data, setData] = useState(accordianData);
  return (
    <div style={{ margin: 20, width: 800 }}>
      <Accordian data={data} onChange={setData} />
    </div>
  );
};

export default Bootstrap;

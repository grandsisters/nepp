// import Accordian from "./Accordian";
// import Dropdown from "./Dropdown";
import React, { useState } from "react";
// import Accordian2 from "./Accordian2";
// import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";

// const accordianData = [
//   { id: 1, title: "Title1", content: "asdsdsadawdasdawdasdawd", active: false },
//   { id: 2, title: "Title2", content: "asdsdsadawdasdawdasdawd", active: false },
//   { id: 3, title: "Title3", content: "asdsdsadawdasdawdasdawd", active: false },
//   { id: 4, title: "Title4", content: "asdsdsadawdasdawdasdawd", active: false },
// ];

const imageList = [
  "https://t1.daumcdn.net/cfile/tistory/9946A4505F5817A60D",
  "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png",
  "https://mblogthumb-phinf.pstatic.net/MjAxNzAxMDdfMTE2/MDAxNDgzNzU1MDMyNTc0.hx5KAnplO4tzx7gyHo0OXzPvyCH5h7gfLjMf-S5qamAg.oUP8V58A0P0ZybvJw_-Dq57FbxOxV9o1MU4tRdnbORwg.JPEG.candle_yt/4.jpg?type=w800",
  "https://t1.daumcdn.net/blogfile/fs11/23_blog_2008_07_13_10_37_48795c5e1d9b4?x-content-disposition=inline&filename=haeyongj_20.jpg",
];

const Bootstrap = () => {
  // const [data, setData] = useState(accordianData);
  return (
    //   <div style={{ margin: 20, width: 800 }}>
    //     <Accordian data={data} onChange={setData} />
    //   </div>
    // );
    <>
      {/* <Dropdown />
      <Carousel />
      <Accordian2 /> */}
      <Carousel2 data={imageList} />
    </>
  );
};

export default Bootstrap;

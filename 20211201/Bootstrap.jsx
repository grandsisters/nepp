import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";

const accordionData = [
  {
    id: 1,
    title: "HEADER1",
    content:
      "Lorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consec",
  },
  {
    id: 2,
    title: "HEADER2",
    content:
      "Lorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consec",
  },
  {
    id: 3,
    title: "HEADER3",
    content:
      "Lorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consecLorem orem ipsum dolor sit amet, consec",
  },
];

const carouselData = [
  "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png",
  "https://og-data.s3.amazonaws.com/media/artworks/half/A0880/A0880-0016.jpg",
  "https://lh3.googleusercontent.com/proxy/LCkPiaOKTJUTakK-D5xKdqa4jxjwsuiVu6bDxZDr9Xa5FK5Ge8y62227-2c0Nj1AcURsn8Qq4J0qgdRCHBPZDiZ_fi853_Ry_o-Fc3AldIVrfJs",
  "https://t1.daumcdn.net/blogfile/fs11/23_blog_2008_07_13_10_37_48795c5e1d9b4?x-content-disposition=inline&filename=haeyongj_20.jpg",
];

const Bootstrap = () => {
  // const [show, setShow] = useState(false);
  return (
    <div>
      <Carousel data={carouselData} />
      {/* <button onClick={() => setShow(!show)}>나오기</button>
      {show && <Dropdown />}
      <Accordion data={accordionData} /> */}
    </div>
  );
};

export default Bootstrap;

import { Link } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <Link to="/main">인스타그램 클론코딩</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Landing;

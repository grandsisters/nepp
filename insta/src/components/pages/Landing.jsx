import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImgBackground } from "../../assets/images";
import CarouselBox from "../organisms/CarouselBox";

const Landing = () => {
  return (
    <Wrapper>
      <BackgroundImg src={ImgBackground} />
      <IntroBox>
        <TitleBox>
          <Title>지구인 여러분 안녕하세요.</Title>
          <Title2>제 포트폴리오 한번 봐주실래요?</Title2>
        </TitleBox>
        <PortfolioBox>
          <EachPortfolio>
            <StyledLink to="/main">인스타그램</StyledLink>
            <CarouselBox />
          </EachPortfolio>
        </PortfolioBox>
      </IntroBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  position: relative;
`;

const BackgroundImg = styled.img`
  width: 100%;
`;

const IntroBox = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;

  color: #fff;
`;

const TitleBox = styled.div``;

const Title = styled.h2`
  text-align: center;
`;
const Title2 = styled.h3`
  text-align: center;
`;

const PortfolioBox = styled.div`
  width: 30%;
  height: 50%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;
`;

const EachPortfolio = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export default Landing;

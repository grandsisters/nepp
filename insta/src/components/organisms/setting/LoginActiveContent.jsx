import styled, { css } from "styled-components";
import { useState } from "react";
import { ImgUnderArrow, ImgTitlePosition } from "../../../assets/images";
import { NowActivityContent } from ".";

const LogOutActiveContent = ({ data }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <EachContent>
      <TitleBox onClick={handleActive}>
        <HereBox>
          <MarkBox>
            <ImgTitlePosition />
          </MarkBox>
          <CityTime>
            <City>IDK, Space</City>
            <Time>{data.date} windows</Time>
          </CityTime>
        </HereBox>
        <StyledImgUnderArrow active={active} />
      </TitleBox>
      <BottomMapBox active={active}>
        <NowActivityContent data={data} />
        <BtnBox>
          <LogOutBtn>로그아웃</LogOutBtn>
        </BtnBox>
      </BottomMapBox>
    </EachContent>
  );
};

const EachContent = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
`;

const TitleBox = styled.div`
  width: 100%;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #e2e2e2;
    cursor: pointer;
  }
  &:active {
    background: #b3b3b3;
  }
`;

const HereBox = styled.div`
  padding: 1px;

  display: flex;
  justify-content: center;
`;

const MarkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CityTime = styled.div`
  padding: 10px;
`;

const City = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin: 0;
`;

const Time = styled.span`
  font-size: 12px;
  color: #8e8e8e;
`;

const LogOutBtn = styled.button`
  border: none;
  background: none;

  width: 100%;

  font-weight: bold;
  font-size: 14px;
`;

const StyledImgUnderArrow = styled(ImgUnderArrow)`
  ${(props) =>
    props.active &&
    css`
      transform: rotate(-180deg);
    `}
`;
const MapBox = styled.div`
  position: relative;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  overflow: hidden;
`;

const BottomMapBox = styled(MapBox)`
  display: none;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const BtnBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export default LogOutActiveContent;

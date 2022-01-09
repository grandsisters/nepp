import styled from "styled-components";
import { ImgExcalamationMark, ImgMap, ImgPosition } from "../../../assets/images";

const LoginActivityContent = ({ data }) => {
  return (
    <>
      <Map src={ImgMap} />
      <HereWrapper>
        <Position src={ImgPosition} />
        <HereBox>
          <MarkBox>
            <StyledImgExcalamationMark />
          </MarkBox>
          <CityTime>
            <City>IDK, Space</City>
            <Time>{data.time} windows</Time>
          </CityTime>
        </HereBox>
      </HereWrapper>
    </>
  );
};

const Map = styled.img`
  width: 100%;
`;

const HereWrapper = styled.div``;

const Position = styled.img`
  position: absolute;
  top: 40%;
  left: 48%;

  width: 20px;
  height: 20px;
`;

const HereBox = styled.div`
  padding: 1px 15px;

  position: absolute;
  top: 20%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: #fff;

  border-radius: 8px;

  display: flex;
  justify-content: center;
`;

const MarkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImgExcalamationMark = styled(ImgExcalamationMark)`
  width: 24px;
  height: 24px;

  margin-right: 10px;
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

export default LoginActivityContent;

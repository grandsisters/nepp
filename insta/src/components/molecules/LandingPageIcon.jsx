import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ImgLandingPageIcon } from "../../assets/images";

const LandingPageIcon = () => {
  return (
    <Wrapper>
      <NavLink to="/">
        <LinkBox>
          <Title>To LandingPage</Title>
          <StyledImgLandingPageIcon />
        </LinkBox>
      </NavLink>
    </Wrapper>
  );
};

const StyledImgLandingPageIcon = styled(ImgLandingPageIcon)`
  display: none;
`;

const Wrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    & > * {
      display: block;
    }
  }
`;

const Title = styled.p`
  border: 3px solid black;
  padding: 10px;
  border-radius: 15px;
  font-weight: bold;
`;

export default LandingPageIcon;

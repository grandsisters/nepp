import styled from "styled-components";
import { SavedData } from "../../../data/SavedData";

const ProfileSaved = () => {
  return (
    <Wrapper>
      <List>
        {SavedData.map((e, i) => (
          <Item src={e} key={i} />
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

const List = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%; */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Item = styled.img`
  width: 30%;
  margin-top: 20px;
`;

export default ProfileSaved;

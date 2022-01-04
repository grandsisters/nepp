import styled from "styled-components";
import { SavedData } from "../../../data/SavedData";

const ProfileSaved = () => {
  return (
    <List>
      {SavedData.map((e) => (
        <Item src={e} />
      ))}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;

const Item = styled.img`
  width: 100%;
`;

export default ProfileSaved;

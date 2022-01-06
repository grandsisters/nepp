import styled from "styled-components";
import { ExploreData } from "../../data/ExploreData";

const Explore = () => {
  return (
    <ListWrapper>
      <List>
        {ExploreData.map((e, i) => (
          <Item src={e} key={i} />
        ))}
      </List>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 90px;
`;

const List = styled.div`
  width: 50%;
  height: 50%;

  display: grid;
  grid-template-columns: repeat(3, 25%);
  grid-gap: 5%;
`;

const Item = styled.img`
  width: 100%;
`;

export default Explore;

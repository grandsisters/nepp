import styled from "styled-components";

const Contract = () => {
  return (
    <Wrapper>
      <TextBox>
        <Title>연락처 관리</Title>
        <TextOne>
          Instagram에 업로드한 연락처 리스트입니다. 동기화된 연락처를 삭제하려면 모두 삭제를 누르세요. 기기 설정으로 이동하여 연락처에 대한 액세스 권한을 해제하지 않는 한 다음번에 Instagram이 연락처를
          동기화할 때 연락처가 다시 업로드됩니다.
        </TextOne>
        <TextTwo>업로드한 연락처 정보는 Instagram이 회원님에게 친구를 추천하거나 이용 환경을 개선하는 데 사용됩니다. 이 연락처 정보는 회원님만 볼 수 있습니다.</TextTwo>
      </TextBox>
      <ContractBox>
        <ActivedContract>
          <NumberOfActived>동기화된 연락처 0개</NumberOfActived>
          <DeleteAllBtnTop>모두 삭제</DeleteAllBtnTop>
        </ActivedContract>
        <ShowUpBox>instagram에 연락처를 업로드 하면 여기에 표시됩니다.</ShowUpBox>
        <DeleteAllBtnBottom>모두 삭제</DeleteAllBtnBottom>
      </ContractBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 50px;
`;

const TextBox = styled.div``;

const Title = styled.h2`
  font-weight: 400;
`;

const TextOne = styled.p``;

const TextTwo = styled.p``;

const ContractBox = styled.div``;

const ActivedContract = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
`;

const NumberOfActived = styled.p`
  font-weight: bold;
`;

const DeleteAllBtn = styled.button`
  border: none;
  font-weight: bold;
  font-size: 15px;
`;

const DeleteAllBtnTop = styled(DeleteAllBtn)`
  background: none;
  color: #93d0f8;
`;

const DeleteAllBtnBottom = styled(DeleteAllBtn)`
  background: rgba(0, 149, 246, 0.3);
  color: #fff;
  border-radius: 5px;
  width: 85px;
  height: 28px;
  margin-top: 20px;
`;

const ShowUpBox = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #dbdbdb;
`;

export default Contract;

import styled from "styled-components";

const Actived = () => {
  return (
    <>
      <EachText>
        <Text>Instagram을 사용하여 로그인하고 최근에 사용했으며, 회원님이 공유하기로 선택한 정보를 요청할 수 있는 앱과 웹사이트입니다.</Text>
        <MoreText>Instagram 계정에 액세스하도록 허용한 앱이 없습니다.</MoreText>
      </EachText>
    </>
  );
};

const EachText = styled.div``;

const Text = styled.p``;

const MoreText = styled.span`
  color: #969696;
`;

export default Actived;

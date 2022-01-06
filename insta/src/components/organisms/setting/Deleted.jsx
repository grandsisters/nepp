import styled from "styled-components";

const Deleted = () => {
  return (
    <>
      <EachText>
        <Text>
          회원님이 계정에서 삭제한 앱과 웹사이트입니다. 이 앱과 웹사이트는 아직 회원님이 이전에 공유한 정보를 가지고 있을 수 있지만, 추가로 정보를 요청할 수는 없습니다. 앱에 회원님의 정보 삭제를
          요청할 수 있습니다. 정보 삭제를 요청하려면 해당 앱의 개인정보처리방침에 명시된 자세한 내용과 연락처 정보를 검토하세요. 앱에 연락하는 경우 사용자 ID가 필요할 수 있습니다.
        </Text>
        <MoreText>Instagram 계정에 대한 액세스 권한을 보유한 앱 중 삭제된 앱이 없습니다.</MoreText>
      </EachText>
    </>
  );
};

const EachText = styled.div``;

const Text = styled.p``;

const MoreText = styled.span`
  color: #969696;
`;

export default Deleted;

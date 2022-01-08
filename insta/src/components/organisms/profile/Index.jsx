import styled from "styled-components";

const ProfileIndex = () => {
  return (
    <Wrapper>
      <PostImg src="https://www.instagram.com/static/images/mediaUpsell.jpg/7e0cb2166ce8.jpg" />
      <PostRight>
        <Share1>소중한 순간을 포착하여 공유해보세요.</Share1>
        <Share2>앱을 다운로드하고 첫 사진이나 동영상을 공유해보세요.</Share2>
        <DownloadWrap>
          <AppleDownload src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" />
          <GoogleDownload src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" />
        </DownloadWrap>
      </PostRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostImg = styled.img`
  width: 380px;
  height: 380px;
`;

const PostRight = styled.div`
  width: 555px;
  height: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Share1 = styled.h2`
  font-size: 18px;
`;
const Share2 = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const DownloadWrap = styled.div`
  margin-top: 60px;
`;

const GoogleDownload = styled.img`
  width: 136px;
  height: 40px;
`;

const AppleDownload = styled.img`
  width: 136px;
  height: 40px;
`;

export default ProfileIndex;

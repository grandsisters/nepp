import styled from "styled-components";

const FooterNav = () => {
  const InformOneData = [
    { name: "Meta", src: "https://about.facebook.com/meta" },
    { name: "소개", src: "https://about.instagram.com/" },
    { name: "블로그", src: "https://about.instagram.com/blog" },
    { name: "채용 정보", src: "https://about.instagram.com/about-us/careers" },
    { name: "도움말", src: "https://help.instagram.com/" },
    { name: "Api", src: "https://developers.facebook.com/docs/instagram" },
    { name: "개인정보처리방침", src: "https://help.instagram.com/519522125107875" },
    { name: "약관", src: "https://help.instagram.com/581066165581870" },
    { name: "인기 계정", src: "https://www.instagram.com/directory/profiles/" },
    { name: "해시태그", src: "https://www.instagram.com/directory/hashtags/" },
    { name: "위치", src: "https://www.instagram.com/explore/locations/" },
    { name: "Instagram Lite", src: "https://www.instagram.com/web/lite/" },
  ];

  return (
    <Footer>
      <InformOne>
        {InformOneData.map((e) => (
          <a href="naver.com">{e.name}</a>
        ))}
      </InformOne>
      <InformTwo>한국어 © 2022 Instagram from Meta</InformTwo>
    </Footer>
  );
};

const Footer = styled.footer`
  position: absolute;
  bottom: 0;

  background: #fafafa;
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InformOne = styled.div`
  font-size: 12px;

  & > a {
    margin-right: 10px;
    color: #999999;
  }

  & > a:active {
    color: #dbdbdb;
  }
`;

const InformTwo = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: #999999;
`;

export default FooterNav;

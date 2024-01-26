import styled from "styled-components";

const FooterBackground = styled.footer`
  background-color: #000;
  color: white;
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

export const Footer = () => {
  return (
    <FooterBackground>
      <p>Footer</p>
    </FooterBackground>
  );
};

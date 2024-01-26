import Image from 'next/image';
import Link from 'next/link';
import { MaxWidth } from 'src/styles/global';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    li {
      list-style-type: none;
    }
  }
`;

const StyledLink = styled.li`
  background-color: #e16969;
  color: #fff;
  border-radius: 32px;
  padding: 8px 24px;
`;

const LogoLink = styled(Link)`
  cursor: pointer;
`;

export const Header = () => {
  return (
    <MaxWidth>
      <HeaderStyled>
        <LogoLink href="/" title="Cade Gardner - home page">
          <Image src="/images/cade-gardner-logo.png" alt="Cade Gardner - Front-end engineer" height={45} width={156} />
        </LogoLink>
        <ul>
          <StyledLink>
            <Link href="/" title="Interested in my skillset? Say hello!">
              Say hello
            </Link>
          </StyledLink>
        </ul>
      </HeaderStyled>
    </MaxWidth>
  );
};

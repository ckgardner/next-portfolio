import type { NextPage } from 'next';
import Head from 'next/head';
import { MaxWidth } from 'src/styles/global';
import styled from 'styled-components';
import { Footer } from '../shared/footer';
import { Header } from '../shared/header';
import { NextImage } from '../ui/image';

const MainWrapper = styled.div`
  text-align: center;
  margin-top: 80px;

  h1 {
    margin-bottom: 16px;
  }
  h2 {
    font-weight: 400;
    color: #000000cc;
  }
`;

const Profile = styled.div`
  border-radius: 50px;
  width: fit-content;
  margin: 0 auto;
`;

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio of Cade Gardner</title>
        <meta name="description" content="Portfolio of Cade Gardner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MaxWidth>
        <main>
          <MainWrapper>
            <h1>Frontend Software Engineer</h1>
            <h2>I create data-driven, user-friendly experiences.</h2>
            <Profile>
              <NextImage src="/images/cade.jpeg" alt="Cade Gardner profile picture" width={375} height={340} />
            </Profile>
          </MainWrapper>
        </main>
      </MaxWidth>

      <Footer />
    </div>
  );
};

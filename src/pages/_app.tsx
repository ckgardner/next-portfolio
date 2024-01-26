import { useEffect } from 'react';

import AOS from 'aos';
import '../styles/globals.css';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once: true,
      offset: 100,
      delay: 50,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
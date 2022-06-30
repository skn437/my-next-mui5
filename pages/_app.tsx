import Layout from "@/layout/Layout";
import "@/styles/globals.scss";
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} ></Component>
    </Layout>
  );
};

export default MyApp;

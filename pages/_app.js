import "../styles/globals.css";
import GeneralContextProvider from "../contexts/GeneralContext";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <GeneralContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeneralContextProvider>
  );
}

export default MyApp;

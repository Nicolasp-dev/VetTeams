import "../styles/globals.css";
import GeneralContextProvider from "../contexts/GeneralContext";
import { AuthProvider } from "../contexts/AuthCtx";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GeneralContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GeneralContextProvider>
    </AuthProvider>
  );
}

export default MyApp;

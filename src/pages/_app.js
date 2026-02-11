// import '../styles/globals.css'; // Seu tailwind importado aqui
// import Layout from '../components/Layout';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;

import '../styles/globals.css';
import Layout from '../components/Layout';
import { AppProvider } from '../context/AppContext'; // <-- Importe aqui

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
import Head from 'next/head';
import Header from '@/components/common/Header/index';
import Landing from '@/components/sections/Landing';
// import Products from '../components/sections/Products/index';
// import About from '../components/sections/About';
// import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';
import Footer from '../components/common/Footer';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tuzgölü Motorlu Araçlar</title>
      </Head>
      <Provider store={store}>
        <Header />
        <Landing />
        {/* <Products />
      <About />
    <Gallery /> */}
        <Contact />
        <Footer />
      </Provider>
    </>
  );
}

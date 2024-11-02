import logo from './logo.svg';
import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Properties from './components/Properties';
import VerifiedProperties from './components/VerifiedProperties';
import UnverifiedProperties from './components/UnverifiedProperties';

const Home = lazy(() => import('./components/Home'))

function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/verified-properties' element={<VerifiedProperties />} />
          <Route path='/unverified-properties' element={<UnverifiedProperties />} />
        </Routes>
      </Suspense>

      <Footer />

    </div>
  );
}

export default App;

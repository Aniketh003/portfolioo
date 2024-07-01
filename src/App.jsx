import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HeroComponents from './components/hero/HeroComponents';
import Loader from './components/loader/Loader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef(null);

  return (
    <>
      {isLoading ?
        <Loader isLoading={isLoading} setIsLoading={setIsLoading} mainRef={mainRef} />
        :
        <div className='main' ref={mainRef}>
          <Navbar />
          <div className="main-container">
            <div className="container">
              <HeroComponents />
            </div>
          </div>
          <Footer />
        </div>
      }
    </>
  );
}

export default App;

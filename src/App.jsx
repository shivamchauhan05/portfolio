import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeHighlights from './components/HomeHighlights';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Page = ({ children }) => <main className="page">{children}</main>;

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeHighlights />
            </>
          }
        />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/skills" element={<Page><Skills /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/certificates" element={<Page><Certificates /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

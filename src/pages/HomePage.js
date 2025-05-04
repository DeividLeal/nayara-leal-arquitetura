// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Sobre from '../components/Sobre';
import Portfolio from '../components/Portfolio';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Sobre />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;

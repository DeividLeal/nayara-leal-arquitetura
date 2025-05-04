// src/components/Portfolio.js
import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfólio</h2>
      <img
        src="https://via.placeholder.com/900x500.png?text=Projeto+1"
        alt="Projeto 1"
      />
      <img
        src="https://via.placeholder.com/900x500.png?text=Projeto+2"
        alt="Projeto 2"
      />
      <img
        src="https://via.placeholder.com/900x500.png?text=Projeto+3"
        alt="Projeto 3"
      />
    </section>
  );
}

export default Portfolio;

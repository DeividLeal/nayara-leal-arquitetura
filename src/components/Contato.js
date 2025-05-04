// src/components/Contato.js
import React from 'react';
import '../styles/Contato.css';

function Contato() {
  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea rows="5" placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;

import React from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Contato() {
  return (
      <div className='container containerContato'>
            <h2>Contato</h2>
            <div className="form">
                <form action="">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" placeholder="Digite seu nome"/>
                    <label htmlFor="nome">Email</label>
                    <input type="email" placeholder="Digite seu email"/>
                    <label htmlFor="nome">Telefone</label>
                    <input type="text" placeholder="Digite seu telefone"/>
                    <label htmlFor="nome">Mensagem</label>
                    <textarea placeholder="Digite sua mensagem"></textarea>
                </form>
            </div>
      </div>
  );
}

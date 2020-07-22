import React from "react";
import {Link} from 'react-router-dom';

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="nav fixed-top">
      <div className="container nav1">
        <img src={Logo} alt="Logo" />
        <nav class="navbar navbar-expand-lg">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link active" href="#home">
                Home 
              </Link>
              <Link class="nav-item nav-link" href="#produtos">
                Produtos
              </Link>
              <Link class="nav-item nav-link" to="#orçamento">
                Orçamento
              </Link>
              <Link class="nav-item nav-link" to="#contato">
                Contato
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

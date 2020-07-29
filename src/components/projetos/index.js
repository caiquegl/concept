import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";


import './style.css';

import Carrocel from '../carrocelProjetos/index';


export default function Projetos() {




  return (
      <div className='container containerProjetos anime'>
          <h2>Nossos trabalhos</h2>
            <Carrocel />
      </div>
  );
}

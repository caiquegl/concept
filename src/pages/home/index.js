import React from 'react';


import Header from '../../components/header/index';
import Homepg from '../../components/home/index';
import Produtos from '../../components/produtos/index';
import Projetos from '../../components/projetos/index';
import Contato from '../../components/contato/index';
import WHat from '../../assets/whats.png'



import "bootstrap/dist/css/bootstrap.min.css";


export default function Home(){


    return(
        <div className="container containerPai">
            <Header />
            <Homepg />
            <Produtos />
            <Projetos />
            <Contato/>
            <div className="containerWhats">
                <a href="https://api.whatsapp.com/send?phone=5511972098522&text=Ol%C3%A1%2C%20aqui%20%C3%A9%20a%20Concept%20M%C3%A1rmoraria" target="_blank">
                    <img src={WHat} />
                </a>
            </div>
        </div>
    )
}
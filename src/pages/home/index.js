import React from 'react';


import Header from '../../components/header/index';
import Homepg from '../../components/home/index';
import Produtos from '../../components/produtos/index';
import Projetos from '../../components/projetos/index';
import Orcamento from '../../components/orcamento/index';
import Contato from '../../components/contato/index';




import "bootstrap/dist/css/bootstrap.min.css";


export default function Home(){


    return(
        <div className="container containerPai">
            <Header />
            <Homepg />
            <Produtos />
            <Projetos />
            <Orcamento />
            <Contato/>
        </div>
    )
}
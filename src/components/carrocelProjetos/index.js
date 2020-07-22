import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {Carousel} from 'react-bootstrap';


import './style.css';

import Cozinha1 from '../../assets/cozinha1.jpg';
import Cozinha2 from '../../assets/cozinha2.jpg';
import Cozinha3 from '../../assets/cozinha3.jpg';
import Lavatorio from '../../assets/lavatorio.jpg';





export default function Carrocel() {




  return (
      <div className='container'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Cozinha1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Ilha em quartzo</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Cozinha2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Cozinha Arabesco</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Lavatorio}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Banheiro em onix</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Cozinha3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Cozinha em Branco Itaunas</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
      </div>
  );
}

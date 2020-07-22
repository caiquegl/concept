import React from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import Quartzo from '../../assets/silestone.jpg';
import Marmore from '../../assets/marmore.jpg';
import Granito from '../../assets/granito.jpg';
import Silestone from '../../assets/silestone1.jpg';





export default function Produtos() {
  return (
      <div className='container containerProduto' id="produtos">
            <h2>
                Nossos produtos
            </h2>
            <p>
                A Concept é uma empresa que oferece a você uma grande linha de produtos, incluindo os mármores importados, granitos diferenciados, Limestones, Silestone, Technistone e Quartzo.
            </p>
            <div className="produtos">

            {[ 'top'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       Silestone by Cosentino é uma marca única. Pelas suas propriedades e características, e porque quem possui Silestone se transforma em alguém único. Sua exclusividade permitiu que seja uma marca vinculada ao mundo do design e à tendência, unida aos mais altos registros de inovação e modernidade.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Quartzo} alt="Silestone"/>
                    <div>
                        <h5 className="hover-sombra">Quartzo</h5>
                        
                        
                    </div>
                    
                </section>
                </OverlayTrigger>
                  ))}

                {[ 'top'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       Tem bom polimento e pouca resistência ao calor. Reveste pisos e paredes e também guarnece pias de cozinha e banheiro. É uma rocha metamórfica, originada de calcário exposto a altas temperaturas e pressão. Por este motivo, as maiores jazidas de mármore são encontradas em regiões de rocha matriz calcária e atividade vulcânica. O mármore é uma rocha explorada para uso em construção civil.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Marmore} alt="Marmore"/>
                    <div>
                        <h5 className="hover-sombra">Mármores</h5>
                        
                        
                    </div>
                    
                </section>
                </OverlayTrigger>
                  ))}

                {[ 'top'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       O granito é uma rocha formada de três minerais: mica, quartzo e feldspato. É mais duro que o mármore.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Granito} alt="Granito"/>
                    <div>
                        <h5 className="hover-sombra">Granitos</h5>
                        
                        
                    </div>
                    
                </section>
                </OverlayTrigger>
                  ))}

                {[ 'top'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                       O granito é uma rocha formada de três minerais: mica, quartzo e feldspato. É mais duro que o mármore.
                      </Tooltip>
                    }
                  >
                <section>
                    <img src={Silestone} alt="Granito"/>
                    <div>
                        <h5 className="hover-sombra">Silestone</h5>
                        
                        
                    </div>
                    
                </section>
                </OverlayTrigger>
                  ))}

            </div>


      </div>
  );
}

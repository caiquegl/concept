import React, {useState} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

export default function Home(){
    const [comPia, setComPia] = useState("");
    const [larPia, setLarPia] = useState("");
    const [comFron, setComFron] = useState("");
    const [larFron, setLarFron] = useState("");
    const [comSaia, setComSaia] = useState("");
    const [larSaia, setLarSaia] = useState("");

    const [comSol, setComSol] = useState("");
    const [larSol, setLarSol] = useState("");

    const [valorTotal, setValorTotal] = useState("");

    const [selectValue, setSelectValue] = useState(1);

    const list = [
        {id:0, link: "", name: 'Selecione uma pedra'},
        {id:1, link: "250", name: 'Preto S. Gabriel'},
        {id:2, link: "1200", name: 'Quartzo'}
      ]; 



    function soleira(){
        document.getElementById("soleira").style = "display: block;"
        document.getElementById("pia").style = "display: none;"
    }

    function pia(){
        document.getElementById("soleira").style = "display: none;"
        document.getElementById("pia").style = "display: block;"
    }

    function calSoleira(){
        setValorTotal("");
        let calculando = (comSol * larSol)*selectValue;
        setValorTotal(calculando+",00");
    }

    function calPia(){
        setValorTotal("");

        let calculoTotal;

        if (comSaia > 0.04){
        let calculando1 = ((comPia*larPia)+(comFron*larFron)+(comSaia*larSaia))*selectValue;
        let calAcab = (comSaia * 80)
    
        calculoTotal = calculando1 + calAcab + 45+250;

        }else{
        let calculando1 = ((comPia*larPia)+(comFron*larFron)+(comSaia*larSaia))*selectValue;
        let calAcab = (comSaia * 40)
    
        calculoTotal = calculando1 + calAcab+ 45 + 250;
        }

        setValorTotal(calculoTotal+",00");
    }

    return(
        <div className="container containerOrcamento" id="orcamento">
            <h2>
                Faça seu orçamento
            </h2>
            <div className="calcular">
                <div className="left">

                    <button onClick={() => pia()}>Orçar pia</button>
                    <button onClick={() => soleira()}>Orçar soleira</button>

                    <div  id="soleira">
                        <label htmlFor="comprimento">Digite o comprimento total</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite o comprimento"
                        value={comSol}
                        onChange={e => setComSol(e.target.value)}/>
                        <br></br>
                        <label htmlFor="largura">Digite a largura</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite a largura"
                        value={larSol}
                        onChange={e => setLarSol(e.target.value)}
                        />
                        <br></br>
                        
                    <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                    {list.map((item) => (
                                <option value={item.link}>{item.name}</option>
                            ))} 
                    </select>
                    <br></br>


                    <button onClick={() => calSoleira()}>Calcular</button>

                    </div>

                    <div  id="pia">
                        <label htmlFor="comprimento">Digite o comprimento total</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite o comprimento"
                        value={comPia}
                        onChange={e => setComPia(e.target.value)}
                        />
                        <br></br>
                        <label htmlFor="largura">Digite a largura</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite a largura"
                        value={larPia}
                        onChange={e => setLarPia(e.target.value)}/>
                        <br></br>
                        <label htmlFor="largura">Digite o comprimento do frontão</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite o comprimento do frontão"
                        value={comFron}
                        onChange={e => setComFron(e.target.value)}
                        />
                        <br></br>
                        <label htmlFor="largura">Digite a altura do frontão</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite a altura do frontão"
                        value={larFron}
                        onChange={e => setLarFron(e.target.value)}/>
                        <br></br>
                        <label htmlFor="largura">Digite a altura da saia</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite a altura da saia"
                        value={larSaia}
                        onChange={e => setLarSaia(e.target.value)}/>
                        <br></br>
                        <label htmlFor="largura">Digite o comprimento da saia</label>
                        <br></br>
                        <input 
                        type="number" 
                        placeholder="Digite o comprimento da saia"
                        value={comSaia}
                        onChange={e => setComSaia(e.target.value)}/>
                        <br></br>
                        
                        <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                    {list.map((item) => (
                                <option value={item.link}>{item.name}</option>
                            ))} 
                    </select>
                    <br></br>


                    <button onClick={() => calPia()}>Calcular</button>
                    </div>

                    
                    

                </div>

                <div className="rigth">
                    <div className="valor">
                    <h2>Estatística do valor: {valorTotal}</h2>


                    <p>Atenção, esse é um valor base, ao entrar em contato com a loja o valor pode aumentar ou diminuir!!</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
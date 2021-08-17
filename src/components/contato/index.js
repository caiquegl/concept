import React, {useState} from "react";
import emailjs from 'emailjs-com';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6234002064575!2d-46.209006485084984!3d-23.546043884690462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd8792a9f3839%3A0x76b22916fa62b295!2sAv.%20Henrique%20P%C3%A9res%2C%201864%20-%20Vila%20Bernadotti%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008735-400!5e0!3m2!1spt-BR!2sbr!4v1595434739705!5m2!1spt-BR!2sbr";


export default function Contato() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [msg, setMsg] = useState("");


  async function run(){
      const data = {
          nome: nome,
          email: 'contato.concept.marmoraria@gmail.com',
          telefone: telefone,
          msg: msg,
      }

      emailjs.send('contato.concept.marmorar', 'template_n858oeo', data, 'user_myrtwznhE9VcjFyKZH94n').then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    // await Api.post('enviar',data)
  }
    


  return (
      <div className='container containerContato anime' id="contato" >
            <h2>Contato</h2>
            <div className="table">
                <div className="form">
                        <label htmlFor="nome">Nome</label>
                        <br></br>
                        <input 
                        type="text" 
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/>
                        <br></br>
                        <label htmlFor="nome">Email</label>
                        <br></br>
                        <input 
                        type="email" 
                        placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                        <br></br>
                        <label htmlFor="nome">Telefone</label>
                        <br></br>
                        <input 
                        type="text" 
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}/>
                        <br></br>
                        <label htmlFor="nome">Mensagem</label>
                        <br></br>
                        <textarea 
                        placeholder="Digite sua mensagem"
                        value={msg}
                        onChange={e => setMsg(e.target.value)}></textarea>
                        <br></br>

                        <button onClick={() => run()}>Enviar</button>
                </div>
                <div className="end">
                    <div>
                        <h3>
                            Endereço:
                        </h3>
                        <p>
                            Av. Henrique Péres, 1864 - Vila Bernadotti, Mogi das Cruzes
                        </p>
                        <h3>
                            Telefone:
                        </h3>
                        <p>
                            (11) 4699-2705
                        </p>
                    </div>
                    <div>
                        <h3>
                            WhatsApp:
                        </h3>
                        <p>
                            (11) 97209-8522
                        </p>
                        <h3>
                            Email:
                        </h3>
                        <p>
                            contato@contato.com
                        </p>
                    </div>

                    <iframe src={mapa}></iframe>
                </div>
            </div>
      </div>
  );
}

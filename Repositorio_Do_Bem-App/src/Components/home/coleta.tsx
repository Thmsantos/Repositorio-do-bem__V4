import './coleta.css'
import Mapa from './mapa';

export default function Coleta(){
    return(
        <>
            <div id="coleta">
                <h1>Pontos de coleta</h1>
                
                
            </div>
            <div id="mapa">
                <Mapa />
            </div>
            <div id ="endereco">
                <div className="ender">
                    <div className="titulo">
                        <img src="./src\assets\images\mapas-e-bandeiras 1.png"></img>
                        <h2> Igreja Videira Diadema</h2>
                    </div>
                    <p> Endereço: R. Salgado de Castro, 400 - Centro, Diadema - SP, 09920-690 <br />
                        Telefone: (11) 97388-0200 <br />
                        Horário: Segunda a sábado: 08h às 18h
                    </p>
                </div>

                <div className="ender">
                    <div className="titulo">
                        <img src="./src\assets\images\mapas-e-bandeiras 1.png"></img>
                        <h2> Fatec Diadema - Luigi Papaiz</h2>
                    </div>
                    <p> Endereço: Av. Luiz Merenda, 443 - Campanário, Diadema - SP, 09931-390 <br />
                        Telefone: (11) 4092-2471 <br />
                        Horário: Segunda a sábado: 08h às 18h

                    </p>
                </div>
            </div>
        </>
    );
}
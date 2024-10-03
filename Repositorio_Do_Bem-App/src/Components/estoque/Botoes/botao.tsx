import generatePdf from '../../../Functions/stockFunction/generatePDF';
import './botao.css'; // Importe o CSS para o componente
import '/src/Functions/stockFunction/generatePDF.tsx'
import adicionarAlimento from '../../../Functions/stockFunction/adicionarAlimento';
import { AlimentoData } from '../../../Functions/stockFunction/Interfaces/AlimentoData';
import { useEffect, useState } from 'react';
import GetAlimentos from '../../../Functions/stockFunction/GetAlimentos';

function Botao(){
  const [alimentos, setAlimentos] = useState<AlimentoData[]>([]);
  const [alimentoRecebido, setAlimentoRecebido] = useState<AlimentoData>();

  useEffect(() => {
    const fetchAlimentos = async () => {
        const alimentosAxios = await GetAlimentos();
        console.log(alimentos)
        setAlimentos(alimentosAxios); 
    };

    fetchAlimentos();
}, []);

  function setFlag(data: string){
    
  }

    return(
      <>
        <div className="button-container">         
                <div> <button className="generate-report" onClick={generatePdf}>Gerar Relatório</button></div>
                <div className="button-group">
                <button className= "botoes">+ Add novo alimento</button>
                <button className="botoes">- Fazer doação</button>
                </div>
          </div>  
    </>
  );
}

export default Botao;





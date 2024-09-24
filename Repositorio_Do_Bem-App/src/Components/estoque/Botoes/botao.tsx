import generatePdf from '../../../Functions/stockFunction/generatePDF';
import './botao.css'; // Importe o CSS para o componente
import '/src/Functions/stockFunction/generatePDF.tsx'

function Botao(){
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
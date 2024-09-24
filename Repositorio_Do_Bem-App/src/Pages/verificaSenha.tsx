import Mensagem from "../Components/verificaSenha/mensagem";
import Verificador from "../Components/verificaSenha/verificador";
import "../Components/verificaSenha/verificaSenha.css"
 
function VerificaSenha(){
 
    return (
        <div>
            <div id="conteudo2">
            <div><Mensagem/></div>
                <div><Verificador/></div>
               
            </div>
        </div>
    )
}
export default VerificaSenha;
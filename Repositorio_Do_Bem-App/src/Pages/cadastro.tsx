import Cadastro_Form from "../Components/cadastro/cadastro-form";
import Left_panel from "../Components/cadastro/left-panel";
import '../Components/cadastro/cadastro-form.css';
import HeaderSignUp from "../Components/cadastro/header";

function Cadastro() {
    return (
        <>
            <HeaderSignUp />
            <div id="conteudo">
                <div><Left_panel /></div>
                <div><Cadastro_Form /></div>
            </div>
        </>
    );
}

export default Cadastro;

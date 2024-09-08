import Cadastro_Form from "../Components/cadastro/cadastro-form";
import Header from "../Components/login/header";
import Left_panel from "../Components/cadastro/left-panel";
import '../Components/cadastro/cadastro-form.css';

function Cadastro() {
    return (
        <>
            <Header />
            <div id="conteudo">
                <div><Left_panel /></div>
                <div><Cadastro_Form /></div>
            </div>
        </>
    );
}

export default Cadastro;

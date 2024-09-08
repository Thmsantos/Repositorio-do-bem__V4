import Header from "../Components/login/header";
import Left_panel from "../Components/login/left-panel";
import Login_Form from "../Components/login/login-form";
import '../Components/login/login.css'

function Login(){

    return (
        <div>
            <Header />
            <div id="conteudo">
                <div><Left_panel /></div>
                <div><Login_Form/></div>
            </div>
        </div>
    )
}
export default Login;
import './login-form.css';
import { LoginData } from '../../Functions/UserFunctions/Interfaces/LoginData';
import { useState } from 'react';
import Login from '../../Functions/UserFunctions/Login';

function Login_Form() {    
    const [cnpj, setCnpj] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const usuario: LoginData = {
        cnpj : cnpj.toString().trim(),
        senha : senha.toString().trim()
    }

    const isFormValid = (): boolean => {
        return Object.values(usuario).every(value => value !== "" && value !== undefined && value !== null);
    };

    const LoginFunction = async () => {

        if(!isFormValid()){
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try{
            const res = await Login(usuario);
            if(res.success){
                alert("bem vindo")
                return;
            } else {
                alert("Credenciais inválidas")
            }
        } catch(error) {
            console.log(error, "nao foi")
            alert("erro interno")
        }
    }    
    return (
        <>
            <div id="direital">
                <h2>Login</h2>
                    <div className="input-container">
                        <div className="input-box">
                            <img src="./src/assets/images/CNPJ.png" alt="cnpj" />
                            <input name="cnpj" type="text" placeholder="CNPJ" onChange={(e) => setCnpj(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/SENHA.png" alt="senha" />
                            <input name="senha" type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
                        </div>
                    </div>
                    <div className="btnl">
                        <a href="#">Esqueceu a senha?</a>
                        <button onClick={LoginFunction} type="submit"className="button-login">Entrar</button>
                        <a href="../cadastro">Não possui uma conta?</a>
                    </div>
            </div>
        </>
    );
}

export default Login_Form;

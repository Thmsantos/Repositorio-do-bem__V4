import './login-form.css';
import { LoginData } from '../../Functions/UserFunctions/Interfaces/LoginData';
import { useEffect, useState } from 'react';
import Login from '../../Functions/UserFunctions/Login';
import adicionarAlimento from '../../Functions/stockFunction/addFood';
import { AlimentoData } from '../../Functions/stockFunction/Interfaces/AlimentoData';

function Login_Form() {
    /* const alimento: AlimentoData = {
        "nome": "Arroz",
        "peso": "5kg",
        "validade": "2025-12-31",
        "quantidade": "50",
        "emailDoador": "exemplo@doador.com",
        "flag": "verde"
    } */
    
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
                return;
            } else {
                alert("Credenciais inválidas")
            }
        } catch(error) {
            console.log(error, "nao foi")
            alert("erro interno")
        }
    }

    /* useEffect(() => {
        const adicionar = async () => {
            try {
                const res = await adicionarAlimento(alimento);
                if (res.success) {
                    console.log("Alimento adicionado com sucesso");
                } else {
                    console.error("Erro ao adicionar alimento:", res.error);
                }
            } catch (error) {
                console.error("Erro ao adicionar alimento:", error);
            }
        };

        adicionar();
    }, []); */
    
    return (
        <>
            <div id="direita">
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
                    <div className="btn-container">
                        <a href="#">Esqueceu a senha?</a>
                        <br />
                        <button onClick={LoginFunction} type="submit"className="button-login">Entrar</button>
                        <a href="../cadastro">Não possui uma conta</a>
                    </div>
            </div>
        </>
    );
}

export default Login_Form;

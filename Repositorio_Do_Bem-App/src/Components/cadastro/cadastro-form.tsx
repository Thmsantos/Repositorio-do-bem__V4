import './cadastro-form.css';
import cadastroUser from '../../Functions/UserFunctions/Cadastro';
import { useState } from 'react';
import { UsuarioData } from '../../Functions/UserFunctions/Interfaces/UsuarioData';

function Cadastro_Form() {
    const [cnpj, setCnpj] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [nome, setNome] = useState<string>("");

    const usuario: UsuarioData = {
        cnpj: cnpj.toString().trim(),
        nomeEmpresa: nome.toString().trim(),
        numero: numero.toString().trim(),
        cep: cep.toString().trim(),
        email: email.toString().trim(),
        senha: senha.toString().trim()
    }

    const isFormValid = (): boolean => {
        return Object.values(usuario).every(value => value !== "" && value !== undefined && value !== null);
    };

    const registerUser = async () => {

        if (!isFormValid()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try{
            const res = await cadastroUser(usuario);
            if(res.success){
                console.log("cadastrou")
            } else {
                console.log("nao cadastrou")
            }
        } catch(error) {
            console.log(error, "nao foi")
        }
    }
    
   
    return (
        <>
            <div id="direita">
                <h2>Cadastre-se</h2>
                    <div id="inputinhos">
                        <div className="input-box">
                            <img src="./src/assets/images/EMAIL.png" alt="email" />
                            <input name="email" type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/CNPJ.png" alt="cnpj" />
                            <input name="cnpj" type="text" placeholder="CNPJ"  onChange={(e) => setCnpj(e.target.value)}/>
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/SENHA.png" alt="senha" />
                            <input name="senha" type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </div>
                    <div id="linha">
                        <div className="input-linha">
                            <img src="./src/assets/images/CEP.png" alt="CEP" />
                            <input name="cep" type="text" placeholder="CEP"  onChange={(e) => setCep(e.target.value)} />
                        </div>
                        <div className="input-linha">
                            <img src="./src/assets/images/CEP.png" alt="numero" />
                            <input name="numero" type="text" placeholder="Número"  onChange={(e) => setNumero(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input-box" id="nome">
                        <img src="./src/assets/images/NOME.png" alt="nome" />
                        <input name="nome" type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div id="btn">
                        <button onClick={registerUser}>Entrar</button>
                        <a href="../login">Já possui uma conta?</a>
                    </div>
            </div>
        </>
    );
}

export default Cadastro_Form;
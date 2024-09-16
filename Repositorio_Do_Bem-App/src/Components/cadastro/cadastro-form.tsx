import './cadastro-form.css';
import cadastroUser from '../../Functions/UserFunctions/cadastroUser';
import { useState } from 'react';
interface UsuarioData {
    cnpj: string;
    nomeEmpresa: string;
    numero: string;
    cep: string;
    email: string;
    senha: string;
}

function Cadastro_Form() {
    const [cnpj, setCnpj] = useState("");
    const [numero, setNumero] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cep, setCep] = useState("");
    const [nome, setNome] = useState("");

    //const usuario: UsuarioData = email= email
    
   
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
                        <button onChange={cadastroUser(cnpj, numero, email, senha, cep, nome)}>Entrar</button>
                        <a href="../login">Já possui uma conta?</a>
                    </div>
            </div>
        </>
    );
}

export default Cadastro_Form;
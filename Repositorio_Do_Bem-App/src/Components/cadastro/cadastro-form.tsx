import './cadastro-form.css';

function Cadastro_Form() {
    const handleLogin = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        // Adicione aqui a lógica para o login, se necessário
    };

    return (
        <>
            <div id="direita">
                <h2>Cadastre-se</h2>
                <form id="form" onSubmit={handleLogin}>
                    <div id="inputinhos">
                        <div className="input-box">
                            <img src="./src/assets/images/EMAIL.png" alt="email" />
                            <input name="email" type="text" placeholder="E-mail" required />
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/CNPJ.png" alt="cnpj" />
                            <input name="cnpj" type="text" maxLength="15" placeholder="CNPJ" required />
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/SENHA.png" alt="senha" />
                            <input name="senha" type="password" placeholder="Senha" required />
                        </div>
                    </div>
                    <div id="linha">
                        <div className="input-linha">
                            <img src="./src/assets/images/CEP.png" alt="CEP" />
                            <input name="cep" type="text" placeholder="CEP" required />
                        </div>
                        <div className="input-linha">
                            <img src="./src/assets/images/CEP.png" alt="numero" />
                            <input name="numero" type="text" placeholder="Número" required />
                        </div>
                    </div>
                    <div className="input-box" id="nome">
                        <img src="./src/assets/images/NOME.png" alt="nome" />
                        <input name="nome" type="text" placeholder="Nome" required />
                    </div>
                    <div id="btn">
                        <button type="submit">Entrar</button>
                        <a href="../login">Já possui uma conta?</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro_Form;
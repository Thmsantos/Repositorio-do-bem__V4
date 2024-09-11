import './login-form.css';

function Login_Form() {
    

    return (
        <>
            <div id="direita">
                <h2>Login</h2>
                <form id="form">
                    <div className="input-container">
                        <div className="input-box">
                            <img src="./src/assets/images/EMAIL.png" alt="email" />
                            <input name="email" type="text" placeholder="E-mail" required />
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/CNPJ.png" alt="cnpj" />
                            <input name="cnpj" type="text" placeholder="CNPJ" required />
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/SENHA.png" alt="senha" />
                            <input name="senha" type="password" placeholder="Senha" required />
                        </div>
                    </div>
                    <div className="btn-container">
                        <a href="#">Esqueceu a senha?</a>
                        <br />
                        <button type="submit"className="button-login">Entrar</button>
                        <a href="../cadastro">Não possui uma conta</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login_Form;

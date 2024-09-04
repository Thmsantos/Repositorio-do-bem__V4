import "./login-form.css"
function Login_Form() {
    return (
        <div className="right-panel">
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="cnpj">
                        <img src="https://via.placeholder.com/20" alt="Ícone de CNPJ" />
                        <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" />
                    </label>
                </div>
                <div className="input-group">
                    <label htmlFor="email">
                        <img src="https://via.placeholder.com/20" alt="Ícone de Email" />
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </label>
                </div>
                <div className="input-group">
                    <label htmlFor="senha">
                        <img src="https://via.placeholder.com/20" alt="Ícone de Senha" />
                        <input type="password" id="senha" name="senha" placeholder="Senha" />
                    </label>
                </div>
                <button type="submit">Entrar</button>
                <div className="options">
                    <a href="#">Esqueci a senha</a>
                </div>
                <p className="register">Não possui uma conta?</p>
            </form>
        </div>
    );
}
export default Login_Form;

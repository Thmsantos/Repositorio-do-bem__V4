import "./verificador.css"
 
function Verificador(){
 
    return (
        <>
            <div id="direita">
                    <div className="input-container">
                    <div className="input-box">
                        <img src="./src/assets/images/CNPJ.png" alt="codigo" />
                        <input name="codigo" type="text" placeholder="Codigo"/>
                    </div>
                    <div className="input-box">
                            <img src="./src/assets/images/SENHA.png" alt="senha" />
                            <input name="senha" type="password" placeholder=" Nova Senha"/>
                        </div>
                        <div className="input-box">
                            <img src="./src/assets/images/SENHA.png" alt="senha" />
                            <input name="senha" type="password" placeholder="Senha"/>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="submit"className="button-verificar">Redefinir</button>
                    </div>
            </div>
        </>
    );
}
export default Verificador;
import './pagina_erro_500.css'

export default function Pagina500(){
    return(
        <>
        <div className="page-erro">

                <div className="texto-page-erro">
                    <h1 className="texto-page-erro-titulo">500</h1>
                    <p className="texto-page-erro-texto">Erro interno no servidor, a página não pode ser exibida!</p>

                </div>

                <footer className="footer-page-erro">

                    <div className="footer-page-erro-logo">
                        <img src="./src/assets/images/logo-aba.png" alt="logo"/>
                    </div>

                    <div className="footer-page-erro-texto">
                        <h1 className="footer-page-erro-texto-h1">Repositório do Bem</h1>
                    </div>

                </footer>

            </div>
        
        </>
    )
}
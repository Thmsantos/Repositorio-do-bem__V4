import './pagina_erro_404.css'

export default function Pagina404(){
    return(
        <>

            <div className="page-erro">

                <div className="texto-page-erro">
                    <h1 className="texto-page-erro-titulo">404</h1>
                    <p className="texto-page-erro-texto">A página que você está procurando não pode ser encontrada!</p>

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

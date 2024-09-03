import './instituicoes-envolvidas.css'

export default function InstuicoesEnvolvidas(){
    return(
    <>
    <div className="instituicoes-envolvidas">

        <div className="instituicoes-envolvidas-texto">
            <p>Conheça as Instituições envolvidas</p>
        </div>

        <div className="instituicoes-envolvidas-imagens">

            <div className="instituicoes-envolvidas-imagens1">
                <img src="./src/assets/images/fatec-diadema.jfif" alt="Fatec Diadema"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="instituicoes-envolvidas-imagens2">
                <img src="./src/assets/images/videira-igreja.jfif" alt="Igreja Videira"/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

        </div>

    </div>
    </>
    )
}
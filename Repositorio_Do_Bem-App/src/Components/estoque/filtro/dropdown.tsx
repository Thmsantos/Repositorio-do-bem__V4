import './dropdown.css'

function Filtro(){
    return(
        <>      
       <div className="dropdown">
        <div className="selecao">
            <span className="selecionado">Verificar Validade</span>
            <div className="seta"></div>
        </div>
        <ul className="menu">
            <li className="active"> Essa semana</li>
            <li>Próxima semana</li>
            <li> Mês que vem</li>
            <li> Em três meses</li>
        </ul>
    </div>       
        </>
    )
}
export default Filtro;
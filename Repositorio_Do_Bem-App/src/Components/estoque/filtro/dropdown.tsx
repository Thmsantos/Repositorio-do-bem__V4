import './dropdown.css'
import { useState } from 'react';

function Filtro() {

    const [selecionado, setSelecionado] = useState("Verificar Validade"); 
    const [abrirMenu, setAbrirMenu] = useState(false);  

    const selecionarOpcao = (opcao: string) => {
        setSelecionado(opcao);
        setAbrirMenu(false);  
    };

    return (
        <>
            <div className="dropdown">
            <div className="selecao" onClick= {() => setAbrirMenu(!abrirMenu)}>
                <span className="selecionado">{selecionado}</span>
                <div className={`seta ${abrirMenu ? 'seta-rotate' : ''}`}></div>
            </div>
            <ul className={`menu ${abrirMenu ? 'menu-open' : ''}`}>
                <li  
                    onClick={() => selecionarOpcao("Selecionar validade")}>
                    Selecionar validade
                </li>
                <li  
                    onClick={() => selecionarOpcao("Próxima semana")}>
                    Próxima semana
                </li>
                <li 
                    onClick={() => selecionarOpcao("Mês que vem")}>
                    Mês que vem
                </li>
                <li 
                    onClick={() => selecionarOpcao("Em três meses")}>
                    Em três meses
                </li>
            </ul>
        </div>    
        </>       
    );
}
export default Filtro;
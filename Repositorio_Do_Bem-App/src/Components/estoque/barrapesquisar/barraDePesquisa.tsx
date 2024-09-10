import './barraDePesquisa.css'

function BarraDePesquisa(){
    return(
        <>
            <div className='div-input'>
                <img className='img-search' src="/src/assets/images/search (1).png" alt="" />
                <input type="text" className="input" placeholder='Pesquisar alimento...' />
            </div>         
        </>
    );
}

export default BarraDePesquisa;
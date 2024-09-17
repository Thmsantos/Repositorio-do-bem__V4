import Navebar from "../Components/estoque/navebar";
import BarraDePesquisa from "../Components/estoque/barrapesquisar/barraDePesquisa";
import StockTable from "../Components/estoque/stocktable/tabela";
import Filtro from "../Components/estoque/filtro/dropdown";
import '/src/Components/estoque/estoque.css'
import Title from "../Components/estoque/titulo/tituloestoque";
import Botao from "../Components/estoque/Botoes/botao";

function Estoque(){
    return(

        <div>
            <Navebar />
            <Title/>
            <div className="filter-search">
                <Filtro/>
                <BarraDePesquisa/>
            </div>
            <StockTable />
            <Botao />

        
        </div>



    )
}

export default Estoque;
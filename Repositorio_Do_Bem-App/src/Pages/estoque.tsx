import Navebar from "../Components/estoque/navebar";
import BarraDePesquisa from "../Components/estoque/barrapesquisar/barraDePesquisa";
import StockTable from "../Components/estoque/stocktable/tabela";
import Filtro from "../Components/estoque/filtro/dropdown";
import '/src/Components/estoque/estoque.css'

function Estoque(){
    return(

        <div>
            <Navebar />
            <div className="filter-search">
                <Filtro/>
                <BarraDePesquisa/>
            </div>
            <StockTable />
        </div>

    )
}

export default Estoque;
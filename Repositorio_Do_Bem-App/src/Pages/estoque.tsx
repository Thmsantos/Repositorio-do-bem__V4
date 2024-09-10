import Navebar from "../Components/estoque/navebar";
import BarraDePesquisa from "../Components/estoque/barrapesquisar/barraDePesquisa";
import StockTable from "../Components/estoque/stocktable/tabela";
import Filtro from "../Components/estoque/filtro/dropdown";

function Estoque(){
    return(

        <div>
            <Navebar />
            <Filtro/>
            <BarraDePesquisa/>
            <StockTable />
        </div>

    )
}

export default Estoque;
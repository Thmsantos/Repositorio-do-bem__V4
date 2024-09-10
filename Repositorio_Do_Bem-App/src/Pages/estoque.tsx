import Navebar from "../Components/estoque/navebar";
import BarraDePesquisa from "../Components/estoque/barrapesquisar/barraDePesquisa";
import StockTable from "../Components/estoque/stocktable/tabela";

function Estoque(){
    return(

        <div>
            <Navebar />
            <BarraDePesquisa/>
            <StockTable />
        </div>

    )
}

export default Estoque;
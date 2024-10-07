import Navebar from "../Components/estoque/header/navebar";
import BarraDePesquisa from "../Components/estoque/barrapesquisar/barraDePesquisa";
import StockTable from "../Components/estoque/stocktable/tabela";
import Filtro from "../Components/estoque/filtro/dropdown";
import '/src/Components/estoque/estoque.css'
import Title from "../Components/estoque/titulo/tituloestoque";
import Botao from "../Components/estoque/Botoes/botao";
import Graficos from "../Components/estoque/gráficos/graficos";

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
            <Graficos/>

        
        </div>



    )
}

export default Estoque;
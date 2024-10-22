import Navebar from "../Components/estoque/header/navebar";
import BarraDePesquisa from "../Components/estoque/barrapesquisar/barraDePesquisa";
import StockTable from "../Components/estoque/stocktable/tabela";
import Filtro from "../Components/estoque/filtro/dropdown";
import '/src/Components/estoque/estoque.css'
import Title from "../Components/estoque/titulo/tituloestoque";
import Botao from "../Components/estoque/Botoes/botao";
import Graficos from "../Components/estoque/gráficos/graficos";
import FooterEstoque from "../Components/estoque/footer/footer";

function Estoque(){
    return(

        <div>
            <Navebar />
            <Title/>
            <div className="filter-search">
                <BarraDePesquisa/>
            </div>
            <StockTable />
            <Botao />
            <Graficos/>
            <FooterEstoque/>

        
        </div>



    )
}

export default Estoque;
import Header from "../Components/home/header";
import Carousel from "../Components/home/carousel";
import Coleta from "../Components/home/coleta";
import Footer from "../Components/home/footer";
import QuemSomos from "../Components/home/quem-somos";
import InstuicoesEnvolvidas from "../Components/home/instituicoes-envolvidas";



function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <Coleta/>
            <InstuicoesEnvolvidas/>
            <QuemSomos/>
            <Footer/>
        </div>
    );
}

export default Home;
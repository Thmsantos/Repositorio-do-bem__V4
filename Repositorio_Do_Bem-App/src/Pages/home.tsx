import Header from "../Components/home/header";
import Carousel from "../Components/home/carousel";
import Footer from "../Components/home/footer";
import QuemSomos from "../Components/home/quem-somos";
import InstuicoesEnvolvidas from "../Components/home/instituicoes-envolvidas";

function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <InstuicoesEnvolvidas></InstuicoesEnvolvidas>
            <QuemSomos></QuemSomos>
            <Footer></Footer>
        </div>
    );
}

export default Home;
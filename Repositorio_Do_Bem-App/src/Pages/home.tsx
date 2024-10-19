import Header from "../Components/home/header";
import Carousel from "../Components/home/carousel";
import Coleta from "../Components/home/coleta";
import Footer from "../Components/home/footer";
import QuemSomos from "../Components/home/quem-somos";
import Features from "../Components/home/features";



function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <Features/>
            <Coleta/>
            <QuemSomos/>
            <Footer/>
        </div>
    );
}

export default Home;
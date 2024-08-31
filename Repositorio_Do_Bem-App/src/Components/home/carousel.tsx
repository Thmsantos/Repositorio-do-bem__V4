import './carousel.css';

export default function Carousel() {
    return (
        <div className="carousel">
            <div className="carousel-container">
                <div className="carousel-item">
                    <img src="./src/assets/images/imagem1.png" alt="Imagem 1" />
                </div>
                <div className="carousel-item">
                    <img src="./src/assets/images/imagem1.png" alt="Imagem 2" />
                </div>
            </div>
            <button class="carousel-prev">&#10094;</button>
            <button class="carousel-next">&#10095;</button>
        </div>
    );
}
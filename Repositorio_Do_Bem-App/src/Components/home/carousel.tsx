import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
    './src/assets/images/imagem1.jpg',
    './src/assets/images/imagem03.jpg',
    './src/assets/images/imagem02.jpg',
    './src/assets/images/imagem04.jpg',
    './src/assets/images/imagem05.jpg',
    './src/assets/images/imagem06.jpg',
    './src/assets/images/imagem07.jpg'
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Adicionando autoplay com useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage(); // Troca de imagem a cada intervalo
        }, 3000); // 3 segundos de intervalo (ajuste conforme necessário)

        return () => {
            clearInterval(interval); // Limpa o intervalo ao desmontar o componente ou mudar o índice
        };
    }, [currentIndex]);

    return (
        <div className="carousel">
            <div className="carousel-container">
                <div className="carousel-item">
                    <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
                </div>
            </div>
            <button className="carousel-prev" onClick={prevImage}>&#10094;</button>
            <button className="carousel-next" onClick={nextImage}>&#10095;</button>
        </div>
    );
}

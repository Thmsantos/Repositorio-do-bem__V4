import React, { useEffect } from 'react';
import L from 'leaflet';
import './mapa.css';

export default function Mapa() {
    useEffect(() => {
        // Cria um mapa no elemento com ID 'map'
        const map = L.map('map').setView([51.505, -0.09], 13);

        // Adiciona uma camada de tiles ao mapa (exemplo com OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        // Adiciona um marcador ao mapa
        L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }, []);

    return <div id="map" style={{ height: '500px' }} />;
}
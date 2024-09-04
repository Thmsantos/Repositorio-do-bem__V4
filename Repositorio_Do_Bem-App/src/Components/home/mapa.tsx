import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrige o problema de ícones que não aparecem corretamente no React-Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Mapa = () => {
    const [positions, setPositions] = useState<{ coords: [number, number]; label: string }[]>([]);

    useEffect(() => {
        const addresses = [
            { address: 'Fatec Diadema Luigi Papaiz, Diadema, São Paulo, Brasil', label: 'Fatec Diadema' },
            { address: 'Igreja Videira Diadema, Diadema, São Paulo, Brasil', label: 'Igreja Videira Diadema' },
        ];

        const fetchCoordinates = async () => {
            const newPositions = [];
            for (const { address, label } of addresses) {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`);
                const data = await response.json();
                if (data && data.length > 0) {
                    const { lat, lon } = data[0];
                    newPositions.push({ coords: [parseFloat(lat), parseFloat(lon)], label });
                }
            }
            setPositions(newPositions);
        };

        fetchCoordinates();
    }, []);

    return (
        <MapContainer center={[-23.6815315, -46.6204614]} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {positions.map((position, index) => (
                <Marker key={index} position={position.coords}>
                    <Popup>
                        {position.label}<br />
                        Latitude: {position.coords[0]}<br />
                        Longitude: {position.coords[1]}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Mapa;
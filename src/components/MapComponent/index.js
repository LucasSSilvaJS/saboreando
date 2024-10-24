// MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import pinLoja from '../../assets/img/pin.loja.svg';

// Para corrigir o problema do ícone do marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({ address }) => {
    const [markerPosition, setMarkerPosition] = useState([0, 0]); // Posição inicial
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            if (!address) return; // Verifica se o endereço é válido

            setLoading(true);
            setError(null); // Reseta o erro antes da nova requisição
            
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`);
                if (!response.ok) throw new Error('Erro na requisição');

                const data = await response.json();
                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    setMarkerPosition([lat, lon]);
                } else {
                    setError('Endereço não encontrado');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCoordinates();

        // Efeito de limpeza (cancelamento da requisição) pode ser adicionado aqui se necessário
    }, [address]);

    const customIconMarket = L.icon({
        iconUrl: pinLoja,
        iconSize: [25, 41], // Tamanho do ícone (largura, altura)
        iconAnchor: [12, 41], // Ponto de ancoragem do ícone
        popupAnchor: [1, -34], // Ponto de ancoragem do popup
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Sombra do ícone (opcional)
    });

    return (
        <>
            {loading ? (
                <p>Carregando o mapa...</p>
            ) : error ? (
                <p>{error}</p> // Exibe a mensagem de erro
            ) : (
                <MapContainer center={markerPosition} zoom={13} style={{ 
                    border: '0',
                    width: '100%',
                    borderRadius: '0 50px 0 0',
                    height: '408px' 
                }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={markerPosition} icon={customIconMarket}>
                        <Popup>
                            Localização: {address}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </>
    );
};

export default MapComponent;

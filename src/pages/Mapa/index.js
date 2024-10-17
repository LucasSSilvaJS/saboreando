import { FaMagnifyingGlass } from 'react-icons/fa6';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import './mapa.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';

import pin from '../../assets/img/pin.svg';
import pinLoja from '../../assets/img/pin.loja.svg';
import L from 'leaflet';

import { localizacoes } from './mapa'

// Corrigir o problema com ícones padrão no Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MoveMapToLocation = ({ location }) => {
    const map = useMap();
    useEffect(() => {
        if (location) {
            map.setView(location, 13); // Centraliza o mapa na localização do usuário
        }
    }, [location, map]);
    return null;
};

function Mapa() {
    const [position] = useState([51.505, -0.09]);
    const [userLocation, setUserLocation] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const customIcon = L.icon({
        iconUrl: pin,
        iconSize: [25, 41], // Tamanho do ícone (largura, altura)
        iconAnchor: [12, 41], // Ponto de ancoragem do ícone
        popupAnchor: [1, -34], // Ponto de ancoragem do popup
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Sombra do ícone (opcional)
    });

    const customIconMarket = L.icon({
        iconUrl: pinLoja,
        iconSize: [25, 41], // Tamanho do ícone (largura, altura)
        iconAnchor: [12, 41], // Ponto de ancoragem do ícone
        popupAnchor: [1, -34], // Ponto de ancoragem do popup
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Sombra do ícone (opcional)
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude]);
                },
                (error) => {
                    setLocationError('Não foi possível obter sua localização. Por favor, habilite o GPS ou permissões.');
                    console.log(locationError)
                    console.error(error);
                },
                { enableHighAccuracy: true }
            );
        } else {
            setLocationError('Geolocalização não é suportada pelo seu navegador.');
        }
    }, []);

    // Função para lidar com mudanças no input de busca
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Função para remover acentos de uma string
    const removeAccents = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacríticos
    };

    // Filtra as localizações com base no termo de pesquisa
    const filteredLocations = localizacoes.filter(location =>
        removeAccents(location.name.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
    );

    return (
        <div className='default-container container-bg'>
            <Header text='Mapa' />
            <main className='map-location-display'>
                <div className='input-wrapper-search'>
                    <FaMagnifyingGlass />
                    <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder='Buscar local' className='search-map' />
                </div>
                <MapContainer center={position} zoom={13} style={{ 'position': 'absolute', 'inset': '0', 'height': '100%', 'width': '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    {userLocation && (
                        <>
                            <Marker position={userLocation} icon={customIcon}>
                                <Popup>Você está aqui</Popup>
                            </Marker>
                            <MoveMapToLocation location={userLocation} />
                        </>
                    )}
                    {filteredLocations.map(location => (
                        <Marker key={location.id} position={location.coordinates} icon={customIconMarket}>
                            <Popup>{location.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </main>
            <Navbar />
        </div>
    );
}

export default Mapa;
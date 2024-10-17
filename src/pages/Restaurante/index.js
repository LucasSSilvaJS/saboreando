import NavRestaurant from "../../components/NavRestaurant";
// import Stamp from "../../components/Stamp";
import { useParams } from "react-router-dom";

// import label from '../../assets/img/label.png';

import './restaurante.css';
import ContainerSection from "../../components/ContainerSection";
import CardCategories from "../../components/CardCategories";
import { FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";
import {selectOne} from "../../services/crud";
import MapComponent from "../../components/MapComponent";

function Restaurante() {
    const {categoria, restaurante} = useParams();
    const [restauranteSection, setRestauranteSection] = useState({});

    useEffect(() => {
        async function getRestaurante() {
            const data = await selectOne('restaurantes', restaurante);
            setRestauranteSection(data);
        }
        getRestaurante();
    }, []);

    return ( 
        <div className="default-container container-bg">
            <NavRestaurant title={restauranteSection.titulo} bgImg={restauranteSection.banner} profileImg={restauranteSection.logo} to={`/restaurantes/${categoria}`}/>
            <main>
                {/* <section className="stamp-collection">
                    <Stamp text='Pet Friendly'/>
                    <Stamp text='Opções veganas'/>
                    <Stamp text='Acessível'/>
                </section> */}

                <section className="about-restaurant container">
                    <h2>Sobre</h2>
                    <p>{restauranteSection.desc}</p>
                </section>

                {/* <img src={label} alt="selo" className="label-restaurant" /> */}

                <ContainerSection text='Seus produtos'>
                    {restauranteSection && restauranteSection?.produtos && restauranteSection.produtos.map(produto => {
                        return(
                            <CardCategories src={produto}/>
                        )
                    })}
                </ContainerSection>

                <section className="map-section">
                    <div className="map-info">
                        <h2>Endereço</h2>
                    </div>
                    <MapComponent address={restauranteSection && restauranteSection?.enderecos && restauranteSection.enderecos[0]}/>
                    <span className="map-adress">
                        <FiMapPin size={20}/>
                        <span>{ (restauranteSection && restauranteSection?.enderecos && restauranteSection.enderecos[0]) ?? 'Não informado'}</span>
                    </span>
                </section>

                <section className="business-hours">
                    <h2>Horário de funcionamento</h2>
                    <ul>
                        {restauranteSection.horario_funcionamento && restauranteSection.horario_funcionamento.map(horario => {
                            return(
                                <li>{horario}</li>
                            )
                        })}
                    </ul>
                </section>
            </main>
        </div>
     );
}

export default Restaurante;
import CardEvent from '../../components/CardEvent';
import CardRecentView from '../../components/CardRecentView';
import ContainerSection from '../../components/ContainerSection';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import banner from '../../assets/img/banner.png';
import {selectAll} from '../../services/crud';
import { useEffect, useState } from 'react';

function Eventos() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        async function getEventos() {
            const data = await selectAll('eventos');
            setEventos(data);
        }

        getEventos();
    }, []);

    return ( 
        <div className='default-container container-bg'>
            <Header text='Eventos'/>
            <main>
                <div style={{'paddingTop': '40px'}}>
                    <ContainerSection text='Na sua cidade'>
                        {eventos && eventos.map(evento => {
                            return(
                                <CardEvent key={evento.id} eventTitle={evento.titulo} eventDate={evento.data} eventLocation={evento.lugar} img={evento.img}/>
                            )
                        })}
                    </ContainerSection>
                </div>

                <div style={{'padding': '20px 0px'}}>
                    <ContainerSection text='Visto recentemente'>
                        {eventos && eventos.map(evento => {
                            return(
                                <CardRecentView key={evento.id} src={evento.img} title={evento.titulo} location={evento.lugar} date={evento.data}/>
                            )
                        })}
                    </ContainerSection>
                </div>

            </main>
            
            <Navbar/>
        </div>
     );
}

export default Eventos;
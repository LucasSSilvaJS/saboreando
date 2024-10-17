import CardHighlighted from '../../components/CardHighlighted';
import ContainerSection from '../../components/ContainerSection';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import {selectAll} from '../../services/crud';
import { useEffect, useState } from 'react';

function Categorias() {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        async function getCategorias(){
            const data = await selectAll('categorias');
            setCategorias(data)
        }
        getCategorias()
    }, [])

    return ( 
        <div className='default-container container-bg'>
            <Header text='Categorias'/>
            <main style={{'paddingBottom': '10px'}}>
                <ContainerSection column={true}>
                    {categorias.map(categoria => {
                        return (
                            <Link key={categoria.id} to={`/categorias/${categoria.id}`}>
                                <CardHighlighted image={categoria.img} text={categoria.titulo}/>
                            </Link>
                        )
                    })}
                </ContainerSection>
            </main>
            <Navbar/>
        </div>
     );
}

export default Categorias;
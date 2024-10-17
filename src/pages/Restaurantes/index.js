import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import CardRestaurant from "../../components/CardRestaurant";

import { useEffect, useState } from "react";
import {selectOne, selectWithFilter} from '../../services/crud';

function Restaurantes() {
    const {categoria} = useParams();
    const [restaurantes, setRestaurantes] = useState();
    const [categoriaSection, setCategoriaSection] = useState({});

    useEffect(() => {
        async function getRestaurantes(){
            const data = await selectWithFilter('restaurantes', 'categoria', '==', categoria);
            setRestaurantes(data);
        }

        async function getCategoria(){
            const data = await selectOne('categorias', categoria);
            setCategoriaSection(data);
        }

        getCategoria()

        getRestaurantes();

    }, []);

    return ( 
        <div className="default-container container-bg">
            <Header text={categoriaSection.titulo} navigation={true} to={`/categorias/${categoria}`}/>
            <main className="container" style={{'paddingLeft': '0px'}}>
                {restaurantes && restaurantes.map(restaurante => {
                    return(
                        <CardRestaurant key={restaurante.id} name={restaurante.titulo} open={true} imgFood={restaurante.banner} imgRestaurant={restaurante.logo} to={`/restaurantes/${categoria}/${restaurante.id}`}/>
                    )
                })}
            </main>
        </div>
     );
}

export default Restaurantes;
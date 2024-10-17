import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import CategoryResume from '../../components/CategoryResume';
import ContainerSection from '../../components/ContainerSection';
import CardFoodCategory from '../../components/CardFoodCategory';

import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { selectOne } from '../../services/crud';

function Categoria() {
    const { categoria } = useParams();
    const [categoriaSection, setCategoriaSection] = useState({});

    useEffect(() => {
        async function getCategoria(){
            const data = await selectOne('categorias', categoria);
            setCategoriaSection(data);
        }
        getCategoria()
    }, []);

    return (
        <div className="default-container container-bg">
            <Header text={categoria.titulo} navigation={true} to={`/categorias`} />
            <main className='container'>
                <CategoryResume
                    img={categoriaSection.img}
                    title={categoriaSection.titulo}
                    desc={categoriaSection.descricao} />
                <ContainerSection column={true}>
                    {categoriaSection.pratos && categoriaSection.pratos.length > 0 && categoriaSection.pratos.map((prato, index) => (
                        <CardFoodCategory
                            key={index}
                            img={prato.img}
                            title={prato.titulo}
                            desc={prato.desc}
                        />
                    ))}
                </ContainerSection>
                <div style={{ 'padding': '30px 0' }}>
                    <Button text='Ver restaurantes' to={`/restaurantes/${categoria}`} />
                </div>
            </main>
        </div>
    );
}

export default Categoria;
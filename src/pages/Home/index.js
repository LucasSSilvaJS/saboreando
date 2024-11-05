import Header from "../../components/Header";
import CardHighlighted from "../../components/CardHighlighted";
import ContainerSection from "../../components/ContainerSection";
import CardCategories from "../../components/CardCategories";
import banner from '../../assets/img/banner.png';
import './home.css';
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectAll, selectOne } from '../../services/crud';

function Home() {

    const [categorias, setCategorias] = useState([])
    const [restaurante1, setRestaurante1] = useState({})
    const [restaurante2, setRestaurante2] = useState({})
    const [restaurante3, setRestaurante3] = useState({})

    useEffect(() => {
        async function getCategorias(){
            const data = await selectAll('categorias');
            setCategorias(data)
        }

        async function getRestaurantes(){
            const barDaGeralda = await selectOne('restaurantes', 'YOH1TmZy3nrPBNtEq8vk');
            setRestaurante1(barDaGeralda);
            const terracoCapibaribe = await selectOne('restaurantes', 'bYVhcFdZIUnSTL151tkd');
            setRestaurante2(terracoCapibaribe);
            const barDoCabo = await selectOne('restaurantes', 'RBZJzifCWl05MSWkGH3b');
            setRestaurante3(barDoCabo);
        }

        getRestaurantes();

        getCategorias()
    }, [])

    return (
        <div className="default-container container-bg">
            <Header text='Home' style={{'position': 'absolute', 'left': '50%', 'transform': 'translateX(-50%)'}}/>
            <main>
                <div className="banner-wrapper container">
                    <img className="banner" src={banner} alt="queremos conhecer você" />
                </div>
                <ContainerSection text='Restaurantes mais visitados'>
                    <Link to={`/restaurantes/nI2C9Dq45XH1wODJOmNs/${restaurante1.id}`}>
                        <CardHighlighted text={restaurante1.titulo} image={restaurante1.banner}/>
                    </Link>
                    <Link to={`/restaurantes/nI2C9Dq45XH1wODJOmNs/${restaurante2.id}`}>
                        <CardHighlighted text={restaurante2.titulo} image={restaurante2.banner}/>
                    </Link>
                    <Link to={`/restaurantes/nI2C9Dq45XH1wODJOmNs/${restaurante3.id}`}>
                        <CardHighlighted text={restaurante3.titulo} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcFonfl5asnjNEv1cn9ovljuFUM_DmIm5ig&s'/>
                    </Link>
                </ContainerSection>
                <ContainerSection text='Categorias'>
                    {categorias && categorias.map(categoria => {
                        return(
                            <Link to={`/categorias/${categoria.id}`} key={categoria.id}>
                                <CardCategories src={categoria.img} text={categoria.titulo}/>
                            </Link>
                        )
                    })}
                </ContainerSection>
            </main>
            <Navbar/>
        </div>
     );
}

export default Home;
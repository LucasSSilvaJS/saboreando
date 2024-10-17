import { useNavigate } from 'react-router-dom';
import './card-restaurant.css';

function CardRestaurant({imgRestaurant, imgFood, name, open, to}) {
    const navigate = useNavigate();

    return (
        <article className="card-restaurant" onClick={() => navigate(to)}>
            <div className="card-restaurant-img">
                <img className='img-food' src={imgFood} alt="prato" />
                <img className='img-restaurant' src={imgRestaurant} alt="restaurante" />
            </div>
            <div className="card-restaurant-desc">
                <h3>{name}</h3>
                {open ? (
                    <span className='open'>Aberto agora</span>
                ) : (
                    <span className='close'>Fechado agora</span>
                )}
            </div>
        </article>
     );
}

export default CardRestaurant;
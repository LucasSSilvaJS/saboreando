import './cardcity.css';

function CardCity({title, img}) {
    return ( 
        <article className="card-city" style={{'backgroundImage': `url(${img})`}}>
            <h3 className="card-city-title">{title}</h3>
        </article>
     );
}

export default CardCity;
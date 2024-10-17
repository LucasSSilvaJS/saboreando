import './cardhighlighted.css';

function CardHighlighted({text, image}) {
    return ( 
        <article className='card-highlighted' style={{'backgroundImage': `url(${image})`}}>
            <h3 className='highlighted-text'>{text}</h3>
        </article>
     );
}

export default CardHighlighted;
import './cardcategories.css';

function CardCategories({src, text}) {
    return (
        <article className='card-categories'>
            <img className='categories-image' src={src} alt={text} />
            <h3 className='categories-title'>{text}</h3>
        </article>
     );
}

export default CardCategories;
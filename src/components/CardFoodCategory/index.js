import './card-food-category.css';

function CardFoodCategory({img, title, desc}) {
    return ( 
        <article className='card-food-category'>
            <div className='food-category-img'>
                <img src={img} alt={title} />
                <h3>{title}</h3>
            </div>
            <div className='food-category-desc'>
                <p>{desc}</p>
            </div>
        </article>
     );
}

export default CardFoodCategory;
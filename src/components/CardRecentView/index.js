import { FaRegHeart, FaRegShareFromSquare } from 'react-icons/fa6';
import './card-recent-view.css';

function CardRecentView({title, date, location, src, actionFavorite, actionShare}) {
    return (
        <article className="card-recent-view">
            <div className='recent-view-img-wrapper'>
                <img className="recent-view-img" src={src} alt={title} />
                <div className='recent-view-buttons'>
                    <button className="recent-view-favorite" onClick={actionFavorite}>
                        <FaRegHeart />
                    </button>
                    <button className="recent-view-share" onClick={actionShare}>
                        <FaRegShareFromSquare />
                    </button>
                </div>
            </div>
            <div className="recent-view-desc">
                <h3 className="recent-view-title">{title}</h3>
                <span className="recent-view-date">{date}</span>
                <span className="recent-view-location">{location}</span>
            </div>
        </article>
     );
}

export default CardRecentView;
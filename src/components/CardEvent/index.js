import { FaRegHeart, FaRegShareFromSquare } from "react-icons/fa6";
import './card-event.css';

function CardEvent({eventDate, eventLocation, eventTitle, actionFavorite, actionShare, img}) {
    return ( 
        <article className="card-event" style={{'backgroundImage': `url(${img})`}}>
            <div className="event-buttons">
                <button className="event-favorite" onClick={actionFavorite}>
                    <FaRegHeart />
                </button>
                <button className="event-share" onClick={actionShare}>
                    <FaRegShareFromSquare />
                </button>
            </div>
            <div className="event-desc">
                <h3 className="event-title">{eventTitle}</h3>
                <span className="event-date">{eventDate}</span>
                <span className="event-location">{eventLocation}</span>
            </div>
        </article>
     );
}

export default CardEvent;
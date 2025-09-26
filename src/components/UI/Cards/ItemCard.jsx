import { Link } from "react-router";

export default function ItemCard({type, cardPoster, cardTitle, cardYear, cardRating, cardPosition, id}) {
    
    return (
      <Link to={`/${type}/${id}`}>
        <div className="item-card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${cardPoster}`}
            alt={`${cardTitle} Poster`}
            className="card-poster"
          />
          {cardPosition ? <span className="item-card-position">{cardPosition}</span> : ''}
          <h3 className="h6">{cardTitle}</h3>
        </div>
      </Link>
    );
}
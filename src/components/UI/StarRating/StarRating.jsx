import { FaStar, FaStarHalf } from "react-icons/fa";


export default function StarRating ({rating = 0}) {

    const roundRating = Math.round(rating) / 2 
    const stars = []

    for (let i = 1; i < 5; i++) {
      if (roundRating >= i) {
        stars.push(<FaStar key={i} />);
      } else if ((roundRating >= i - 0.5)) {
        stars.push(<FaStarHalf key={i} />);
      } 
    }
    
    return (
        <div className="star-rating">
          <div className="stars">{stars}</div>
          <span className="rating">{`(${rating > 0 ? roundRating : ''})`}</span>
        </div>
      )
}

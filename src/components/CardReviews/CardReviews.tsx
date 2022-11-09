import Star from '../../assets/img/star.svg';
import { Review } from '../../pages/MovieDetails/MovieDetails';

import './CardReviews.css';

type Props = {
    reviews: Review[];
}

export default function CardReviews({ reviews } : Props) {

   
    return (
        <div className="card-review-container"  >
            
            {reviews.map((review) => (
                    <div key={review.id}>
                       <>
                       <div className="user-name" key={review.id} >
                            <img src={Star} alt="" />
                            <h1>{review.user.name}</h1>
                        </div>
                        <div className="card-review" >
                            <p>{review.text}</p>
                        </div>
                       </>
                    </div>
            )) } 
        </div>
    )
}
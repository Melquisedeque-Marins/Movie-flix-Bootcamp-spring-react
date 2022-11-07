
import { Link } from 'react-router-dom';
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';

import './MovieCard.css';

type Props = {
    movie?: movie;
}

export default function MovieCard( { movie } : Props) {
    return (
        <div className="movie-card-container">
                    <Link to={`/movies/${movie?.id}/reviews`}>
                        <div className="movie-card-content ">
                            <img src={movie?.imgUrl} alt="" />
                            <div className="movie-card-text">
                                <h1>{movie?.title}</h1>
                                <h2>{movie?.year}</h2>
                                <p>{movie?.subTitle}</p>
                            </div>
                        </div>
                    </Link>
        </div>
    )
}
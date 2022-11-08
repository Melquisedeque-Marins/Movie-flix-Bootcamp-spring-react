
import { Link } from 'react-router-dom';
import { movie } from '../../types/movie';

import './MovieCardFull.css';

type Props = {
    movie?: movie;
}

export default function MovieCardFull( { movie } : Props) {
    return (
        <div className="movie-card-full-container">
            <div className="movie-card-full-content ">
                <img src={movie?.imgUrl} alt="" />
                <div className="movie-card-full-text">
                    <h1>{movie?.title}</h1>
                    <h2>{movie?.year}</h2>
                    <p>{movie?.subTitle}</p>
                </div>
                <div className="movie-card-full-synopsis">
                    <p>{movie?.synopsis}</p>
                </div>
            </div>
        </div>
    )
}
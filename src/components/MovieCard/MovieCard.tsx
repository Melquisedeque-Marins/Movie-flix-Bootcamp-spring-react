
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';

import './MovieCard.css';

type Props = {
    movies?: SpringPage<movie>;
}

export default function MovieCard( { movies } : Props) {
    return (
        <div className="movie-card-container">
                {movies?.content.map(movie => (
                    <div className="movie-card-content">
                        <img src={movie.imgUrl} alt="" />
                        <div className="movie-card-text">
                            <h1>{movie.title}</h1>
                            <h2>{movie.year}</h2>
                            <p>{movie.subTitle}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}
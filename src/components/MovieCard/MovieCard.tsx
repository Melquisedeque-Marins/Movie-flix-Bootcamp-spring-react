
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';

type Props = {
    movies?: SpringPage<movie>;
}

export default function MovieCard( { movies } : Props) {
    return (
        <div className="banner-container">
            <div className="banner-content">
                {movies?.content.map(movie => (
                    <div>
                        <img src={movie.imgUrl} alt="" />
                        <h1>{movie.title}</h1>
                        <h2>{movie.year}</h2>
                        <p>{movie.subTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
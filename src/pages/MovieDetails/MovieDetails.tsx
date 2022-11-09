import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';
import { useParams } from 'react-router-dom';
import { hasAnyHoles } from '../../util/auth';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

import './MovieDetails.css';
import CardReviews from '../../components/CardReviews/CardReviews';
import MovieCardFull from '../../components/MovieCardFull/MovieCardFull';
import { movie } from '../../types/movie';

type urlParams = {
    movieId: string;
};

type User = {
    id: number;
    name: string;
    email: string;
}

export type Review = {
    id: number;
    text: string;
    movieId: number;
    user: User;
}

export default function MovieDetails() {

    const { movieId } = useParams<urlParams>();

    const [movie, setMovie] = useState<movie>(); 

    const [reviews, setReviews] = useState<Review[]>([]); 

    useEffect(() => {
        const config : AxiosRequestConfig = {
            method: 'GET',
            url: `/movies/${movieId}/reviews`,
            withCredentials: true,
            };

        requestBackend(config)
            .then((response) => {
                 setReviews(response.data);
        });
    }, [movieId]);

    useEffect(() => {
        const config : AxiosRequestConfig = {
            method: 'GET',
            url: `/movies/${movieId}`,
            withCredentials: true,
            };

        requestBackend(config)
            .then((response) => {
                 setMovie(response.data);
        });
    }, [movieId]);

    const handleOnInsertReview = (review: Review) => {
        const clone = [...reviews];
        clone.push(review);
        setReviews(clone);
    }
    
    return (
        <div className="movie-details-container">
                <div className="movie-details-content">
                    <MovieCardFull movie={movie}/>
                    {hasAnyHoles(['ROLE_MEMBER']) &&
                    <ReviewForm movieId={movieId} onInsertReview={handleOnInsertReview} />
                    }
                    {reviews.length !== 0 ?
                     <CardReviews reviews={reviews}/>
                     : <div className="reviews-null">
                         <p>Esse filme ainda não possui avaliações.</p>
                     </div>
                    }
                </div>
             
        </div>
    );
}
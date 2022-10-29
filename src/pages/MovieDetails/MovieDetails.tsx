import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';

import './MovieDetails.css';
import { useParams } from 'react-router-dom';
import CardReviews from '../../components/CardReview/CardReviews';
import { hasAnyHoles } from '../../util/auth';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

type urlParams = {
    movieId: string;
};

type User = {
    id: number;
    name: string;
    email: string;
}

type Review = {
    id: number;
    text: string;
    movieId: number;
    user: User;
}

export default function MovieDetails() {

    const { movieId } = useParams<urlParams>();

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
    
    return (
        <div className="movie-details-container">
            <div className="title-details">
                <h1>Tela detalhes do filme id: 1</h1>
            </div>
                {hasAnyHoles(['ROLE_MEMBER']) &&
            <div className="cards-reviews review-form">
                <ReviewForm/>
            </div>
                }
            <div className="cards-reviews">
                {reviews.map((review) =>
                    (
                        <CardReviews text={review.text} name={review.user.name} key={review.id} />
                    )
                )}
            </div>
        </div>
    );
}
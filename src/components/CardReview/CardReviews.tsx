import Star from '../../assets/img/star.svg';

import './CardReviews.css';

type Props = {
    name: string;
    text: string;
}

export default function CardReviews(props : Props) {
    return (
        <div className="card-review-container">
            <div className="user-name">
                <img src={Star} alt="" />
                <h1>{props.name}</h1>
            </div>
            <div className="card-review">
                <p>{props.text}</p>
            </div>
        </div>
    )
}
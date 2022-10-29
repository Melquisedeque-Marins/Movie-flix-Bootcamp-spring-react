import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from '../../pages/MovieDetails/MovieDetails';
import { requestBackend } from '../../util/requests';
import Button from '../Button/Button';
import './ReviewForm.css';

type FormData = {
    text: string;
    movieId: number;
}

type Props = {
    movieId: string;
    onInsertReview: (review: Review) => void;
}

export default function ReviewForm( { movieId, onInsertReview } : Props)  {

    const { register, handleSubmit, formState : { errors}, setValue } = useForm<FormData>();
    
    const onSubimit = (formData : FormData ) => {

        formData.movieId = parseInt(movieId);

        const config : AxiosRequestConfig = {
            method: 'POST',
            url: '/reviews',
            withCredentials: true,
            data: formData,
            };

        requestBackend(config)
            .then((response) => {
                setValue('text', '');
                onInsertReview(response.data);
            })
            .catch(error => {
                console.log('ERROR', error)
            })
   }

    return (
        <div className="review-form-container">
            <form onSubmit={handleSubmit(onSubimit)}>
                <input {...register("text", {
                            required: 'Campo obrigatório',
                           
                        })}
                        className={`form-control base-input ${errors.text ? 'is-invalid' : ''}`}
                         type="text" 
                         placeholder='Digite sua avaliação aqui' 
                         name='text'
                         
                />
                <div className="button-container">
                    <Button text='salvar avaliação'/>
                </div>
            </form>
        </div>
    )
}
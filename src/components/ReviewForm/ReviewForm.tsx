import Button from '../Button/Button';
import './ReviewForm.css';

export default function ReviewForm () {
    return (
        <div className="review-form-container">
            <input type="text" name=""  placeholder='Digite sua avaliação aqui' />
            <div className="button-container">
                <Button text='salvar avaliação'/>
            </div>
        </div>
    )
}
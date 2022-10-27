import Button from '../Button/Button';
import './CardLogin.css';

export default function CardLogin() {
    return (
        <div className="card-login-container">
                <div className="card-login-title">
                    <h1>login</h1>
                </div>
                <div className="card-login-input">
                    <input type="text" name="" id="" placeholder='Email' />
                </div>
                <div className="card-login-input">
                    <input type="password" name="" id="" placeholder='Senha'/>
                </div>
                <Button text="fazer login"/>
        </div>
    )
}
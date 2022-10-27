import Button from '../Button/Button';
import { useForm } from 'react-hook-form';
import './CardLogin.css';
import { requestBackendLogin } from '../../util/requests';


type FormData = {
    username: string;
    password: string;
}

export default function CardLogin() {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubimit = (formData : FormData) => {
        requestBackendLogin(formData)
        .then(response => {
            console.log('SUCESSO', response);

        })
        .catch(error => {
            console.log('ERRO', error);
        });
    };

    return (
        <div className="card-login-container">
                <div className="card-login-title">
                    <h1>login</h1>
                </div>
                <form onSubmit={handleSubmit(onSubimit)} >
                    <div className="card-login-input">
                        <input 
                        {...register("username")}
                         type="text" 
                         name='username' 
                         placeholder='Email' 
                         />
                    </div>
                    <div className="card-login-input">
                        <input 
                        {...register("password")}
                        type="password" 
                        name='password' 
                        placeholder='Senha'/>
                    </div>
                        <Button text="fazer login"/>
                </form>
        </div>
    )
}
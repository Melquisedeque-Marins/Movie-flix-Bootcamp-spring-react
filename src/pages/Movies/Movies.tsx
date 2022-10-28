import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './Movies.css';

export default function Movies() {

    const [page, setPage] = useState<SpringPage<movie>>(); 

    useEffect(() => {
        const params : AxiosRequestConfig = {
            url: '/movies',
            withCredentials: true,
            params: {
                page: 0,
                size: 12,
            },
        };

        requestBackend(params).then((response) => {
            setPage(response.data);
            console.log(response)
        });
    }, []);


    return (
        <div className="movies-container">
            <h1>Tela listagem de filmes</h1>
                <Link to='/movies/1'> acessar/movies/1</Link>
                <Link to='/movies/2'> acessar/movies/2</Link>
        </div>
    )
}
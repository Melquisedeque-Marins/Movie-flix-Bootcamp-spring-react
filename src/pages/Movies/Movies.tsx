import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
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
                size: 4,
            },
        };

        requestBackend(params).then((response) => {
            setPage(response.data);
        });
    }, []);

    return (
        <div className="movies-container">
            <h1>Tela listagem de filmes</h1>
           
            <MovieCard movies={page}/>
                
        </div>
    )
}
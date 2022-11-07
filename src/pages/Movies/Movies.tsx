import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
           
                        <div className='row'>
                            {page?.content.map(movie => (
                                <div key={movie.id}  className='col-sm-6 col-m-6 col-lg-6 col-xl-3'>
                                    <Link to="/">
                                        <MovieCard movie={movie}/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                
        </div>
    )
}
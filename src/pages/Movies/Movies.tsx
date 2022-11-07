import { AxiosRequestConfig } from 'axios';
import { generateKey } from 'crypto';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Genre } from '../../types/genre';
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './Movies.css';



export default function Movies() {

    const [page, setPage] = useState<SpringPage<movie>>(); 

    const [selectCategories, setSelectCategories] = useState<Genre[]>([]);

    useEffect(()=> {
        const config : AxiosRequestConfig = {
            url: '/genres',
            withCredentials: true,
        };
        requestBackend(config)
            .then(response => {
                setSelectCategories(response.data);
                console.log(response.data)
            })
    }, []);


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
    }, [selectCategories]);

    return (
        <div className="movies-container">
            <div className="filter-container">
                <Select 
                    options={selectCategories}
                    classNamePrefix="filter-select"
                    getOptionLabel={(genre: Genre) => genre.name}
                    getOptionValue={(genre: Genre) => String(genre.id)}
                />
            </div>
           
            <div className='row'>
                {page?.content.map(movie => (
                    <div key={movie.id}  className='col-sm-6 col-m-6 col-lg-6 col-xl-3'>
                            <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
                
        </div>
    )
}
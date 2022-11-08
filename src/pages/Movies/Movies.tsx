import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import MovieCard from '../../components/MovieCard/MovieCard';
import Pagination from '../../components/Pagination/Pagination';
import { Genre } from '../../types/genre';
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './Movies.css';



export default function Movies() {

    const [page, setPage] = useState<SpringPage<movie>>(); 

    const [selectCategories, setSelectCategories] = useState<Genre[]>([]);

    const handleChangeCategory = (value: Genre) => {
    }

    useEffect(()=> {
        const config : AxiosRequestConfig = {
            url: '/genres',
            withCredentials: true,
        };
        requestBackend(config)
            .then(response => {
                setSelectCategories(response.data);
            })
    }, []);

    useEffect(() => {
        getMovies(0);
    }, []);
    
    const getMovies = (pageNumber: number) => {
        const params : AxiosRequestConfig = {
            url: '/movies',
            withCredentials: true,
            params: {
                page: pageNumber,
                size: 4,
            },
        };
    
        requestBackend(params).then((response) => {
            setPage(response.data);
        });

    }

    return (
        <div className="movies-container">
            <div className="filter-container">
                <div className="filter-box">
                    <Select
                        options={selectCategories}
                        classNamePrefix="filter-select"
                        isClearable
                        getOptionLabel={(genre: Genre) => genre.name}
                        getOptionValue={(genre: Genre) => String(genre.id)}
                        onChange={value => handleChangeCategory(value as Genre)}
                    />
                </div>
            </div>
           
            <div className='row'>
                {page?.content.map(movie => (
                    <div key={movie.id}  className='col-sm-6 col-m-6 col-lg-6 col-xl-3'>
                            <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
            <Pagination
                forcePage={page?.number}
                pageCount={(page) ? page.totalPages : 0}
                range={3}
                onChange={getMovies}
            />
                
        </div>
    )
}
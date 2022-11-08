import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieFilter, { MovieFilterData } from '../../components/MovieFilter/MovieFilter';
import Pagination from '../../components/Pagination/Pagination';
import { Genre } from '../../types/genre';
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './Movies.css';

type ControlComponentsData = {
    activePage: number;
    filterData: MovieFilterData;
}

export default function Movies() {

    const [controlComponentsData, setControlComponentsData]
     = useState<ControlComponentsData>(
        {
        activePage: 0,
        filterData: { genre: null }
        }
    );

    const [page, setPage] = useState<SpringPage<movie>>(); 

    const handlePageChange = ((pageNumber: number) => {
       setControlComponentsData({activePage: pageNumber, filterData: controlComponentsData.filterData})
            });

    const handleSubmitFilter = (data: MovieFilterData) => {
        setControlComponentsData({activePage: 0, filterData: data})
    }

    useEffect(() => {
        const config : AxiosRequestConfig = {
            method: 'GET',
            url: '/movies',
            withCredentials: true,
            params: {
                page: controlComponentsData.activePage,
                size: 4,
                genreId: controlComponentsData.filterData.genre?.id
            },
        };
    
        requestBackend(config).then((response) => {
            setPage(response.data);
        });
    }, [controlComponentsData]);
    
    return (
        <div className="movies-container">
            <div className="filter ">
                <MovieFilter onSubmitFilter={handleSubmitFilter}/>
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
                onChange={handlePageChange}
            />
                
        </div>
    )
}
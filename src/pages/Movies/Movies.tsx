import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieFilter from '../../components/MovieFilter/MovieFilter';
import Pagination from '../../components/Pagination/Pagination';
import { Genre } from '../../types/genre';
import { movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import './Movies.css';

type ControlComponentsData = {
    activePage: number;
}

export default function Movies() {

    const [controlComponentsData, setControlComponentsData]
     = useState<ControlComponentsData>(
        {
        activePage: 0
        }
    );

    const [page, setPage] = useState<SpringPage<movie>>(); 

   

    const handlePageChange = ((pageNumber: number) => {
       setControlComponentsData({activePage: pageNumber})
            });

    useEffect(() => {
        const params : AxiosRequestConfig = {
            url: '/movies',
            withCredentials: true,
            params: {
                page: controlComponentsData.activePage,
                size: 4,
            },
        };
    
        requestBackend(params).then((response) => {
            setPage(response.data);
        });
    }, [controlComponentsData]);
    
    return (
        <div className="movies-container">
                <MovieFilter/>
           
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
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "../../types/genre";
import { requestBackend } from "../../util/requests";

import './MovieFilter.css';

type MovieFilterData = {
    genre: Genre;
}

export default function MovieFilter () {

    const {
        register,
        handleSubmit,
        control
    } = useForm<MovieFilterData>();
   
    const [selectCategories, setSelectCategories] = useState<Genre[]>([]);
    
    const handleChangeCategory = (value: Genre) => {
        console.log("ENVIOU", value);
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

    return (
        <div className="movie-filter-container">
            <div className="filter-box">
                        <Controller
                            name='genre'
                            control={control}
                            render={({field}) => (
                                <Select {...field}
                                    options={selectCategories}
                                    classNamePrefix="filter-select"
                                    isClearable
                                    placeholder="Escolha um gênero"
                                    getOptionLabel={(genre: Genre) => genre.name}
                                    getOptionValue={(genre: Genre) => String(genre.id)}
                                    onChange={value => handleChangeCategory(value as Genre)}
                                />
                            )}
                        />
            </div>
        </div>
    )
}



import { AxiosRequestConfig } from "axios";
import { getRandomValues } from "crypto";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "../../types/genre";
import { requestBackend } from "../../util/requests";

import './MovieFilter.css';

export type MovieFilterData = {
    genre?: Genre | null;
}

type Props = {
    onSubmitFilter : (data: MovieFilterData) => void;
}

export default function MovieFilter ( { onSubmitFilter } : Props) {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        control
    } = useForm<MovieFilterData>();
   
    const [selectGenre, setSelectGenre] = useState<Genre[]>([]);
    
    const handleChangeGenre = (value: Genre) => {
        setValue('genre', value);

        const obj: MovieFilterData = {
            genre: getValues("genre")
        }
        onSubmitFilter(obj);
    }

    useEffect(()=> {
        const config : AxiosRequestConfig = {
            method: 'GET',
            url: '/genres',
            withCredentials: true,
        };
        requestBackend(config)
            .then(response => {
                setSelectGenre(response.data);
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
                                    options={selectGenre}
                                    classNamePrefix="filter-select"
                                    isClearable
                                    placeholder="Escolha um gênero"
                                    getOptionLabel={(genre: Genre) => genre.name}
                                    getOptionValue={(genre: Genre) => String(genre.id)}
                                    onChange={value => handleChangeGenre(value as Genre)}
                                />
                            )}
                        />
            </div>
        </div>
    )
}



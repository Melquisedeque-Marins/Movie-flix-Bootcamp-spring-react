import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Genre } from "../../types/genre";
import { requestBackend } from "../../util/requests";



export default function MovieFilter () {
   
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


    return (


        <div className="filter-container">
            <Select
            options={selectCategories}
            classNamePrefix="filter-select"
            isClearable
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
            onChange={value => handleChangeCategory(value as Genre)}
            />
        </div>
    )
}



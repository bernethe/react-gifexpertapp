import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
// import getGifs from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data,loading} = useFetchGifs(category);
    // console.log(data,loading);

    // useEffect( () => {
    //     getGifs(category).then(imgs => setImages( imgs ))
    // }, [category] );

    

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Cargando...</p> }
            <div className="card-grid">
                {
                    data.map( (_img) => {
                        // return <li key={img.id}>{img.title}</li>
                        return <GifGridItem key={_img.id} {..._img} />
                    } )
                }
            </div>
        </>
    )
}

export default GifGrid;
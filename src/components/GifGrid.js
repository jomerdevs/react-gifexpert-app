import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
        

    const { data:images, loading } = useFetchGifs( category);

    

    
    
    return (
        <>
            <h3> { category } </h3>

            { loading ? 'Loading...': null}

            <div className='card-grid'>
                            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } // esto permite que tengamos disponibles todas las propiedades en GifGridItem 
                        />
                    ))
                }
                            
            </div>
        
        </>        
    )
}

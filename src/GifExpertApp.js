import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // Haciendo destructuring del useState con un arreglo
    const [categories, setCategories] = useState(['One Punch']); 

    return (
        <>
            <h2 className='titulo-app'>GifExpert App</h2>
            <AddCategory setCategories={ setCategories } /> {/* Pasamos setCategories para usarlo en AddCategory*/}
            <hr/>            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}



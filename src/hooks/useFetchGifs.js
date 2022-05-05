import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading:true
    });
    
    // este codigo significa que solo se va a ejecutar ese codigo cuando se renderize por primera vez
    useEffect( () => {
        // --- IMPORTAMOS getGifs DESDE LA CARPETA helpers ARCHIVO getGifs.js
        getGifs( category )
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [ category ])

    return state; // { data: [], loading: true}
}
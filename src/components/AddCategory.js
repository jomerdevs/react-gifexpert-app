import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Hacemos destructuring a los props y extraemos setCategories que enviamos desde el GifExpertApp
export const AddCategory = ( { setCategories } ) => {

    // le damos al useState un estado inicial y hacemos destructuring para poner cambiar y agregar con setInputValue
    const [inputValue, setInputValue] = useState('');

    // recibiendo el evento con el valor y agregandolo con el setInputValue
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // validamos que si lo que se introduce en el input tiene mas de 2 letras
        if ( inputValue.trim().length > 2 ) {

            // usamos un callback dentro de setCategories que obtenga la referencia de categories y agregamos inputValue
            setCategories(cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
        
    }

  return (
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            placeholder=" BUSCAR Gifs"
        />
    </form>
  )
}

// Obligamos a que setCategories sea requerido pasarlo
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

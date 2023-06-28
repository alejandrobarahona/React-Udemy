import { useState } from 'react'

export const AddCategory = ({ onNewCategories }) => {

    const [ inputValue, setInputValue ] = useState( [''] )

    const onInputChange = ( {target} ) => {
        setInputValue( target.value )
    }

    const onSubmitForm = ( event ) => {
        event.preventDefault()
        if( inputValue.trim().length <= 1) return        
        onNewCategories( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmitForm }>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue }
                // onChange = { ( event ) => onInputChange( event ) }
                onChange={ onInputChange }
            />
        </form>
    )
}

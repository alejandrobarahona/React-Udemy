import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ])

    const onAddCategory = (newValue) => {
        if( categories.includes( newValue ) ) return
        setCategories( [newValue, ...categories] )
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategories = { onAddCategory }/>
            
            { categories.map( category => 
                ( 
                    <GifGrid key={category} category = { category }/>
                )
            ) }
            
        </>
    )
}

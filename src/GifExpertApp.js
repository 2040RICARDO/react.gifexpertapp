import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, SetCategories] = useState(['goku'])

    return (
        <>
            <h1>Gif Expert Ap</h1>

            <hr />
            <AddCategory setCategories={SetCategories} />
            <ol>
                {
                    categories.map((category, index) => (
                        <GifGrid category={category} key={index + category} />
                    )
                    )
                }
            </ol>
        </>
    )
}
export default GifExpertApp;

import React from 'react'
import { Category } from "./Category";
import { useState } from 'react';

export function Filter(listOfCategories, drinksData) {
    const filterDrinks = function (currentCategory,drinksData){
        return currentCategory ===  listOfCategories[0] ? drinksData : drinksData.filter((drink) => drink.category === currentCategory )
     }
    const [currentCategory, setCurrentCategory ] = useState(listOfCategories[0])

    
    const handleCategoryClick = function (drinksData){
        drinksData = filterDrinks(currentCategory,drinksData)
        setCurrentCategory()
        return (
        <ul >
            {drinksData.map( drink => {<Category  category={drink.category} item={drink}/> })}
        </ul>)
    }
    return (
        <>
            <h1>Drinks List</h1>
            {listOfCategories.map(category =>  <button onClick={() => handleCategoryClick(category)}>{category}</button>)}
        </>
    )
}

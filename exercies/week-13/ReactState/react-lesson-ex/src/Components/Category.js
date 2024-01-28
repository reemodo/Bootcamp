import React from 'react'
import { Item } from './Item'
export  function Category({category, item}) {
    
    return (
        <>  
            <li>
            <h3>{category}</h3>
            <Item name={item.name} price={item.price} company={item.company}/>
            </li>
        </>
    )
}

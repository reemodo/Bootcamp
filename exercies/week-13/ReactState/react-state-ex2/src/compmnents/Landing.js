import React from 'react'
import { Item } from './Item'
export function Landing({user,hottestItem}) {
    

    return (
        <>
           <div>welcome  {user} the hottest item is item {hottestItem.item} for ${hottestItem.price}</div> 
        </>
    )
}

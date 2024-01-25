import React from 'react'
import { Item } from './Item'

export function Home({store, shouldDiscount}) {
    

    return (
        <>
            {store.map(item => <Item shouldDiscount={shouldDiscount} item={item.item} price={item.price} discount={item.discount} key={item.item}/>)}
        </>
    )
}

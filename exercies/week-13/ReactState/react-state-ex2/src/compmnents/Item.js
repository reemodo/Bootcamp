import React from 'react'

export function Item({shouldDiscount, item, price, discount}) {
    if (shouldDiscount === true){
        return (
            <>
                <div>{item} : $ {price * (1 - discount)}  </div>
            </>
        )
    }

    return (
        <>
            <div>{item} : $ {price}</div>
        </>
    )
}

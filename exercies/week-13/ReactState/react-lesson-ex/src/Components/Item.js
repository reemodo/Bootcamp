import React from 'react'

export function Item({name, price, company}) {
    

    return (
        <>
            <div>
                <h4>{name}</h4>
                {price}
                {company}
            </div>
        </>
    )
}

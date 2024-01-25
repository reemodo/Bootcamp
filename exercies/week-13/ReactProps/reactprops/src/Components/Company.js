import React from 'react'
import { SubCompany } from './SubCompany'

export function Company({name}) {
    

    return (
        <>
         {<SubCompany name={name}/>}
        </>
    )
}

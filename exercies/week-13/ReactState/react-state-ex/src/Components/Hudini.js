import React from 'react'

export function Hudini({show}) {
    if(!show)
    return (
        <>
            <div> "Now you don’t"</div>
        </>
    )
    else
    return (
        <>
            <div> "Now you see me"</div>
        </>
    )

}

import React from 'react'

export function Contact({contact, handelDisplayConversation, }) {
    

    return (
        <>
            <li onClick={() => {handelDisplayConversation(contact)} }> {contact.with} </li>
        </>
    )
}

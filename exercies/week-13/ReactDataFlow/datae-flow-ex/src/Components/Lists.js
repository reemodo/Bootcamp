import React from 'react'
import { Conversation } from './Conversation'
import { useState } from 'react'
import { Contact } from './Contact'

export function Lists( {users, handelDisplayConversation}) {
    
    return (
        <>
        <ul>
            {users.map(contact => <Contact contact={contact} key={contact.with} handelDisplayConversation={handelDisplayConversation} />)}
        </ul>
        
        </>
    )
}

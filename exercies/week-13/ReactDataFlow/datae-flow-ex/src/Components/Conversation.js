import React from 'react'
const checkSender = function (sender, contact){
    if(sender === "self")
    return "Me"
    else return contact
}
export function Conversation({convo,contact, handelDisplayConversation}) {

    return (
        <>
            <button onClick={() => handelDisplayConversation(null)}>Back</button>
            {convo.map((convo) => <div>{ checkSender(convo.sender , contact) +" : " +convo.text } </div>)}
        </>
    )
}

import React from 'react'
import { Lists }from './Lists'
import { useState } from 'react'
import { Conversation } from './Conversation'
const userData = {
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
}

/**It should, based on the value of displayConversation render either the list of contacts - 
 * use a component called List for this - or a Conversation component.
If displayConverastion is null - Exercise2 should display List, otherwise it should display Conversation - 
for now both of these components can be empty, just make sure it’s working. */
export function Ex2() {
    const [displayConversation, setDisplayConversation] = useState(null)
    const handelDisplayConversation = (contact) => {
            setDisplayConversation(contact);
    }

    return (
        <>
            {(displayConversation)?
            <Conversation contact= {displayConversation.with} convo = {displayConversation.convo} handelDisplayConversation={handelDisplayConversation} key={displayConversation.with} />: <Lists users={userData.conversations} handelDisplayConversation={handelDisplayConversation}/>
}
        </>
    )
}

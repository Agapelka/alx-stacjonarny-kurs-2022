import { useState, useEffect } from 'react';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ChatForm from 'components/sections/ChatForm/ChatForm';
import ChatMessages from 'components/sections/ChatMessages/ChatMessages';
import { fetchMessages, postMessage } from 'utils/http';


function ChatPage() {

    const [authorInputValue, setAuthorInput]= useState('');
    // const [isAuthorError, setAuthorError]= useState('');

    const [authorErrorCode, setAuthorErrorCode]= useState(0);
    
    const [messageInputValue, setMessageInput] = useState('');
    // const [isMessageError, setMessageError]= useState('');

    const [messages, setMessages] = useState([]);


    //funkcja odczytanie danych z serwera
    useEffect(() => {
        fetchMessages()
        .then (data => {
            // jeśli chcemy odwrócić tablicę, to potrzebuujemy użyć metody reverse
            setMessages(data.reverse());
        })
    }, []);



// WALIDACJA
const validateForm = () => {
    let valid = true;

    // if(authorInputValue.length <= 3) {
    //     valid = false;
    //     setAuthorError(true);
    // }else{
    //     setAuthorError(false);
    // }
    

    if(authorInputValue.length === 0) {
        valid = false;
        setAuthorErrorCode(1);    
    }else if(authorInputValue.length <= 3) {
        valid = false;
        setAuthorErrorCode(2);    
    }else{
        setAuthorErrorCode(0);   
    }
    
    return valid;
}


// HANDLESUBMIT
    const handleSubmit = (event) => {
        event.preventDefault();

        if(!validateForm()) {
        return;
        }

        const generatedId = Date.now();

        const newMessage = {
            id: generatedId,
            author: authorInputValue,
            message: messageInputValue
        }
        const newListMessages = messages.concat(newMessage);
        setMessages(newListMessages);
        
        setAuthorInput('')
        setMessageInput('')
        setAuthorErrorCode()
        postMessage(newMessage)
    }

// INPUT CHANGES
    const handleAuthorInputChange = event => {
        setAuthorInput(event.target.value);
    }
    const handleMessageInputChange = event => {
        setMessageInput(event.target.value);
    }

    // ------------------------------------------

// użycie MainTemplate
    return (
        <MainTemplate>
            <h1>ChatNow</h1>
        
            <ChatForm 
                handleSubmit={handleSubmit}
                authorInputValue={authorInputValue}
                handleAuthorInputChange={handleAuthorInputChange}
                messageInputValue={messageInputValue}
                handleMessageInputChange={handleMessageInputChange}
                // isAuthorError={isAuthorError}
                authorErrorCode={authorErrorCode}

            />        

            <ChatMessages messages={messages}/>
        
        </MainTemplate>
            
        
    )

}

export default ChatPage;
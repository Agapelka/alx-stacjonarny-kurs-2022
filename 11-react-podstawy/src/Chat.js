import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {    
    
    const [inputAuthorValue, setInputAuthorValue] = useState('')
    const [isAuthorError, setAuthorError] = useState()
    
    const [inputMessageValue, setInputMessageValue] = useState('')
    const [isMessageError, setMessageError] = useState()
    const [messages, setMessages] = useState([])
    
    
    useEffect(() => {
        // const messagesFromLs = localStorage.getItem('messages');

        // if(messagesFromLs) {
        //     setMessages(JSON.parse(messagesFromLs))
        // }  
        // // console.log(messagesFromLs)
        fetch('http://localhost:5000/messages')
        .then(res => res.json())
        .then(data => {
            setMessages(data);
        })
    }, []);
  

// walidacja złożonego formularza - dobra praktyka - osobna funkcja do walidacji
    const validateForm = () => {
        let valid = true;

        if(inputAuthorValue.length === 0) {
            valid = false;
            setAuthorError(true);
        }else{
            setAuthorError(false);
        }

        if(inputMessageValue.length <= 2) {
            valid = false;
            setMessageError(true);
        }else{
            setMessageError(false);
        }
        return valid;
    }

   

    const handleSubmit = (event) => {
        event.preventDefault();

        const isFormValid = validateForm();

        if(!isFormValid) {
        return;
    }

        const newMessage = {
            id: uuidv4(),
            author: inputAuthorValue,
            message: inputMessageValue
        }
        const newListMessages = messages.concat(newMessage)
            

        //podmiana listy w stanie
        setMessages(newListMessages);
        // localStorage.setItem('messages', JSON.stringify(newListMessages));

        const postMessage = (messageToSend) => {
            fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'
            },
            body:JSON.stringify(messageToSend)
            })
         }

        // czyszczenie inputów
        setInputAuthorValue('')
        setInputMessageValue('')
        setAuthorError(false)

        // Czyszczenie błędów walidacyjnych
        setMessageError(false)

        postMessage(newMessage)

    }


    const handleInputAuthorChange = (event) => {
        setInputAuthorValue(event.target.value);
    }
    const handleInputMessageChange = (event) => {
        setInputMessageValue(event.target.value);
    }

    // usuwanie konkretnej wiadomości
    const handleMessageRemove = (idToRemove) => {
        const filteredMessages = messages.filter(message => {
            return message.id !== idToRemove
        })

        setMessages(filteredMessages);
        // localStorage.setItem('messages', JSON.stringify(filteredMessages));
        removeMessage(idToRemove)
    }

    const removeMessage = (idToRemove) => {
        fetch(`http://localhost:5000/messages/${idToRemove}`, {
            method: 'DELETE'
        })
    }



    return (
        <div>
            <h1>Hello Chat</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Author
                     <input type="text" value={inputAuthorValue} onChange={handleInputAuthorChange}></input>
                    </label>
                    
                    {
                    isAuthorError
                    ? <p className="error"> Pole Author nie może być puste</p>
                    : null
                    }
                </div>
                <div>
                    <label> Message
                        <input type="text"value={inputMessageValue}  onChange={handleInputMessageChange}></input>
                    </label>
                    {
                    isMessageError
                    ? <p className="error"> Pole Message musi być dłuższe niż 3 znaki</p>
                    : null
                    }
                </div>
                <button type="submit">Send</button>
            </form>

            <ul>
                {
                    messages.map(message => {
                        return (
                        <li key={message.id}>
                            {message.author} {message.message}
                            <button onClick={() => handleMessageRemove(message.id)}> x </button>
                        </li>)
                    })
                }

            </ul>

        </div>
    )
}

export default Chat;
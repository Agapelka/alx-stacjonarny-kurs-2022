import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import MainTemplate from "components/templates/MainTemplate/MainTemplate"
import ChatForm from "components/sections/ChatForm/ChatForm";
import { editMessage, getMessage } from "utils/http";

function EditPage() {
    const navigate = useNavigate();
    const [authorInputValue, setAuthorInput]= useState('');
    const [messageInputValue, setMessageInput] = useState('');
    // funkcja useParams jest potrzebna do tego aby pobierać informacje z parametrów
    const params = useParams();
    // aby znaleźć pod jaką nazwą przychodzi mi parametr, musimy sprawdzić konfigurację naszego routera.
    console.log(params);
    //ekwiwalent window.href


    useEffect(() => {
      getMessage(params.messageId)
      .then(data => {
        setAuthorInput(data.author)
        setMessageInput(data.message)
      })
      // tablica w tym przypadku nie powinna być pusta, bo ten useEffect powinien się wykonywać za każdym razem, jak wchodzimy na podstronę edit.
    }, [params.messageId])
    

    const handleSubmit = (event) => {
        event.preventDefault();

// W przypadku operacji PUT, nie potrzebuję przekazywać id w body, ponieważ id jest zawarte w parametrze od fetcha
        const editedMessage = {
            author: authorInputValue,
            message: messageInputValue
        }

        editMessage(params.messageId, editedMessage)
        .then(() => {
            navigate('/');
        })        
    }

    const handleAuthorInputChange = event => {
        setAuthorInput(event.target.value);
    }
    const handleMessageInputChange = event => {
        setMessageInput(event.target.value);
    }

// ---------------------------

    return (
        <MainTemplate>
            <h1>Hello Edit Page</h1>
            <ChatForm 
                handleSubmit={handleSubmit}
                authorInputValue={authorInputValue}
                handleAuthorInputChange={handleAuthorInputChange}
                messageInputValue={messageInputValue}
                handleMessageInputChange={handleMessageInputChange}
            /> 
        </MainTemplate>
        
    )
}
export default EditPage;
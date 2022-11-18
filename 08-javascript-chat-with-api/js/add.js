import { v4 as uuidv4 } from 'uuid';
import { fetchChatmessages } from '../controllers/chatmessages';

const addMessageForm = document.querySelector('#addMessageForm');
const inputAuthor = document.querySelector('#inputAuthor');
const inputMessage = document.querySelector('#inputMessage');

let messages = [];

//-----------------WERSJA Z LS ----------------------

// odczytywanie wiadomości z LS------------------------------

// const readMessage = ()=> {
//     let messagesToRead = JSON.parse(localStorage.getItem ('messages'))
//     if (messagesToRead === null) {
//         messages = [];
//     }else{
//     messages = messagesToRead
// }}
// readMessage();


// funkcja - zapisywanie nowej wiadomosci w ls-----------------

// const saveMessage = () => {
//     localStorage.setItem('messages', JSON.stringify(messages))
// }


// //funkcja obsługująca dodawanie nowej wiadomości
// const handleSubmit = (event) => {
//     event.preventDefault();

//     //obiekt nowa wiadomość
//     const newMessage = {
//         id: uuidv4(),
//         author: inputAuthor.value,
//         message: inputMessage.value
//     }
//     // wywołania - dodawanie do tablicy nowej wiadomości i zapis w ls
//     messages.push(newMessage); 
//     saveMessage();
// }

// addMessageForm.addEventListener('submit', handleSubmit)


//-----------------WERSJA Z API ----------------------


// wysyłanie na serwer nowej wiadomości
const postMessage = (message)=> {
    fetch('http://localhost:5000/chatmessages',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(message)
        })
    .then(() => {
        window.location.href = 'index.html';
    })
}



//funkcja obsługująca dodawanie nowej wiadomości
const handleSubmit = (event) => {
    event.preventDefault();

    //obiekt nowa wiadomość
    const newMessage = {
        id: uuidv4(),
        author: inputAuthor.value,
        message: inputMessage.value
    }
    // wywołania
    postMessage(newMessage); 
}

addMessageForm.addEventListener('submit', handleSubmit)



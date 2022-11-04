// Stworz aplikacje chat

// Stworz aplikacje chat, ktora zawiera okno chatu i formularz wpisywania wiadomosci.

// 1. Formularz powinien miec 2 inputy, pole author i pole message
// 2. Okno chatu, powinno wyswietlac wyslane wiadomosci wraz z jego autorem
// 3. Wiadomosci zapisz jako tablica obiektow i umiesc je w localStorage
// 4. Po wejsciu na strone, przeczytaj wiadomosci z localStorage i wyswietl w oknie chatu

// * Dodatkowe

// 5. Nad oknem chatu, zrob header z searchem (input + przycisk search). Po wcisnieciu przycisku, przefiltruj wiadomosci. Filtruj tylko po message.
// 6. Ostyluj zadanie zeby przypominalo realny chat :)
// 7. Odczytywanie i zapisywanie do localStorage stworz jako osobne funkcje, zapisz je w osobnych plikach i zaimportuj do glownego pliku chat.js


let messages = [
    // {
    //     author: "",
    //     message: ""
    // }
]

class SingleMessage {
    constructor(author, message){
        this.author = author;
        this.message = message;
    }
}   
     //alternatywa:
    //const author = inputValue;
    //const message = messageValue
    //messages.push({author, message})

const chatForm = document.querySelector('#chatForm');
const nameInput = document.querySelector('#nameInput');
const messageInput = document.querySelector('#messageInput');
const messagesList = document.querySelector('#messagesList');

const messagesDisplay = (messagesToDisplay) => {
    messagesList.innerHTML = ''
    messagesToDisplay.forEach((message) => {
        messagesList.innerHTML +=`
        <li>
            ${message.author}<br>
             ${message.message}
         </li></br>
        `
     })
}
    
//Obsługa submita - wyświetlanie wiadomości
const handleSubmit = (event) => {
    event.preventDefault();

    //pobrać wartość z inputa Author
    //pobrać wartość z inputa Message
    //Nowy obiekt ma powstać z tych dwóch wartości (author, message)
    //Pushować obiekt do tablicy messages

    const inputValue = nameInput.value;
    const messageValue = messageInput.value;

    const newMessage = new SingleMessage(inputValue, messageValue);
    messages.push(newMessage);

    messagesDisplay(messages)
    
    nameInput.value = ''
    messageInput.value =''

    localStorage.setItem('messages', JSON.stringify(messages));

}

chatForm.addEventListener('submit',handleSubmit);

let messages_str = localStorage.getItem('messages')
messages = JSON.parse(messages_str)
if(messages === null) {
    messages = [];
}

messagesDisplay(messages)

// alternatywa
// messages = JSON.parse(localStorage.getItem('messages'))







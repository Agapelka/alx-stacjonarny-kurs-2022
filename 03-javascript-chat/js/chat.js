// Stworz aplikacje chat

// Stworz aplikacje chat, ktora zawiera okno chatu i formularz wpisywania wiadomosci.

// 1. Formularz powinien miec 2 inputy, pole author i pole message
// 2. Okno chatu, powinno wyswietlac wyslane wiadomosci wraz z jego autorem
// 3. Wiadomosci zapisz jako tablica obiektow i umiesc je w localStorage
// 4. Po wejsciu na strone, przeczytaj wiadomosci z localStorage i wyswietl w oknie chatu

// * Dodatkowe

// 5. Nad oknem chatu, zrob header z searchem (input + przycisk search). Po wcisnieciu przycisku, przefiltruj wiadomosci. Filtruj tylko po message.
// 6. Ostyluj zadanie zeby przypominalo realny chat :)
// 7. Odczytywanie i zapisywanie do localStorage stworz jako osobne funkcje, 
// zapisz je w osobnych plikach i zaimportuj do glownego pliku chat.js hmmm...

import { save } from './save_to_local.js';
import { read } from './read_from_local.js';

let messages = []

class SingleMessage {
    constructor(author, message){
        this.author = author;
        this.message = message;
    }
}   

const chatForm = document.querySelector('#chatForm');
const nameInput = document.querySelector('#nameInput');
const messageInput = document.querySelector('#messageInput');
const messagesList = document.querySelector('#messagesList');
const searchInput = document.querySelector('#searchInput');
const searching = document.querySelector('#searching')
const reset = document.querySelector('#reset')

// Wyświetlanie listy wiadomości
const messagesDisplay = (messagesToDisplay) => {
    messagesList.innerHTML = ''
    messagesToDisplay.forEach((message) => {
        messagesList.innerHTML +=`
        <li>
            <b>${message.author}<br></b>
             ${message.message}
         </li></br>
        `
     })
}
    
//Obsługa submita - wyświetlanie wiadomości
const handleSubmit = (event) => {
    event.preventDefault();

    const inputValue = nameInput.value;
    const messageValue = messageInput.value;

    const newMessage = new SingleMessage(inputValue, messageValue);
    messages.push(newMessage);

    messagesDisplay(messages)

    nameInput.value = ''
    messageInput.value =''

    save(messages);
}

// Filtrowanie wiadomości
const handleSearch = (event) => {
    event.preventDefault();
    const searchInputValue = searchInput.value;
    const findMessage = messages.filter((message) => {
        return message.message.includes(`${searchInputValue}`);
    });
    messagesDisplay(findMessage);
}

chatForm.addEventListener('submit',handleSubmit);
searching.addEventListener('click',handleSearch);
reset.addEventListener('click',messagesDisplay(messages));

messages = read();
messagesDisplay(messages)







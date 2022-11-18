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

import { v4 as uuidv4 } from 'uuid';


const chatForm = document.querySelector('#chatForm');
const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');
const messageList = document.querySelector('#messageList')

// const messagesFromLS = JSON.parse(localStorage.getItem('messages'));
let messages = [];

// Warunek sprawdza czy sa jakies rzeczy w LS, zeby w razie czego powinna byc pusta tablica
// Musi byc tablica, bo pozniej uzywamy forEach, ktory jest funkcja tablicowa.
// if(messagesFromLS) {
//   messages = messagesFromLS;
// }

// * ES9 ?? nullish operator
// const messages = JSON.parse(localStorage.getItem('messages')) ?? []

const renderMessage = (messageToRender) => {
  messageList.innerHTML += `
    <li>
      <p>${messageToRender.message} - <strong>${messageToRender.author}</strong></p>
    </li>
  `
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newMessage = {
    id:uuidv4(),
    author: authorInput.value,
    message: messageInput.value
  }

    fetch('http://localhost:5000/messages', {
    method: 'POST',
    headers: {
      'Content-type': "application/json"
    },
    body: JSON.stringify(newMessage)
  })

  renderMessage(newMessage);

  messageInput.value = ''
  authorInput.value = ''
}

chatForm.addEventListener('submit', handleSubmit)

//Ten forEach został przeniesiony do fetcha
// messages.forEach((message) => {
//   renderMessage(message);
// })


// Promise i Korzystanie z biblioteki fetch - wysyłanie do HTTP
fetch('http://localhost:5000/messages')
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach((message) => {
        renderMessage(message);
    })
})
.catch((error) =>{
    console.log(error);
})


// wysyłanie danych HTTP
// SNIPPET DO POST
// UWAGA: Pole ID jest wymagane przy metodach POST i PUT

// const messageToSend = {
//     id: uuidv4(), //wywołujemy metodę, którą zaimportowalićmy na górze z paczki npm uuidv4
//     message: 'Tresc wyslana do serwera',
//     author: 'Damian'
//   }
  
//   fetch('http://localhost:5000/messages', {
//     method: 'POST',
//     headers: {
//       'Content-type': "application/json"
//     },
//     body: JSON.stringify(messageToSend)
//   })


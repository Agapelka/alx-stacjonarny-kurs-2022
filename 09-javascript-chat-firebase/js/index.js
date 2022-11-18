import { ref, onValue, set, remove } from "firebase/database";
import { database } from "../utils/firebase";

const messagesList = document.querySelector('#messagesList');
const addMessageForm = document.querySelector('#addMessageForm');
const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');

// To sluzy do tego, aby powiedziec firebase, z ktorego miejsca w bazie danych chcemy pobrac dane.
const messagesRef = ref(database, '/messages');

const renderMessages = messages => {
    messagesList.innerHTML = ""

  messages.forEach(messageFromFB => {
    messagesList.innerHTML += `
      <li> ${messageFromFB.message} - <strong>${messageFromFB.author}</strong>
      <button class="close" data-elementId=${messageFromFB.id}> X </button>
      </li>
    `
  })
}


const fetchMessages = () => {
    // Potrzebujemy wlaczyc nasluchiwanie na zmiany w firebase
    onValue(messagesRef, (data) => {
      const messages = data.toJSON();
  
      // Zeby miec ID w obiekcie, ktory przychodzi z firebase, potrzebujemy dodac id (ktory jest kluczem obiektu), do kazdego obiektu pod pozycja id
  
      const messagesWithId = Object.keys(messages).map(key => {
        messages[key].id = key; // do każdego obiektu doklejam klucz id
        return messages[key];
      })
  
      renderMessages(messagesWithId)
  
      // Potrzebujemy obiekt obiektow, zamienic na tablice obiektow
      // Object.values przerabia wartosci obiektu na tablice obiektow (pomija klucze)
      // renderMessages(Object.values(messages))
    })
  }

const saveMessage = messageToSave => {
    // generuje ID za pomocą timestampów, czyli czasu, który upłynął 0d 01.01.1970, co gwarantuje mi tylko i wyłącznie większe cyfry.
    const randomId = Date.now();
    //wg dokumentacji Firebase metoda set do zapisywania w bazie wprowadzonych danych
    set(ref(database, 'messages/' + randomId), messageToSave)
}

const handleAddMessage = (event) => {
  event.preventDefault();

  // firebase sam generuje ID, wiec nie potrzebujemy tutaj uuid
  const newMessage = {
    author: authorInput.value,
    message: messageInput.value
  }

saveMessage(newMessage);
  console.log(newMessage);

}

addMessageForm.addEventListener('submit', handleAddMessage)
fetchMessages();



// 1. Zrob obsluge edycji i usuwania w FB
  // - do edycji skorzystaj z metody set

  // set(ref(database, 'messages/' + elementId), editedData)

  // - do usuwania uzyj metody ref(database, 'messages/' + elementId).remove()
  
  
//   const deleteMessage = messageToDelete => {
//     ref(database, 'messages/' + elementId).remove(messageToDelete)
// }

  const deleteMessage = elementId => {
    remove(ref(database, 'messages/' + elementId))
}

const handleRemoveMessage = (event) => {
    const idToRemove = event.target.getAttribute('data-elementId')
    deleteMessage(idToRemove);
    console.log(event.target.parentElement)
    event.target.parentElement.remove();
}

const handleListClick = (event) => {
    if(event.target.classList.contains('close')) {
        handleRemoveMessage(event);
    }
}


messagesList.addEventListener('click', handleListClick)
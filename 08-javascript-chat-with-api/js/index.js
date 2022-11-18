const messagesList = document.querySelector('#messagesList')

// button będzie null
// const buttons = document.querySelector('#buttons')

let messages = [];

// ----------WERSJA Z LOCALSTORAGE-------------

// odczytywanie wiadomości z LS
// const readMessage = ()=> {
//     let messagesToRead = JSON.parse(localStorage.getItem ('messages'))
//     if (messagesToRead === null) {
//         messages = [];
//     }else{
//     messages = messagesToRead
// }}
// readMessage();


// const renderMessage = (messagesToRender) => {
//     messagesToRender.forEach((message) => {
//         messagesList.innerHTML += `
//         <li>
//             <p><strong>${message.author}</strong><br>
//             ${message.message}</p>
//         </li>
//         `
//     })
// }
// console.log(messages);
// renderMessage(messages);




// ----------WERSJA Z API -------------

// wyświetlanie listy
const renderMessage = (messagesToRender) => {
    messagesToRender.forEach((message) => {
        messagesList.innerHTML += `
        <li>
            <p><strong>${message.author}</strong><br>
            ${message.message}</p>
            <button class="edit" data-elementId="${message.id}"> &#9998; </button>
            <button class="close" data-elementId="${message.id}"> X </button>
        </li>
        
        `
    })
}

// zapytanie do serwera o odczyt
const fetchChatmessages = () => {
    fetch('http://localhost:5000/chatmessages')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderMessage(data.messages);
    })
}

const removeMessage = id => {
    fetch(`http://localhost:5000/chatmessages/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('udało się')
    })

}

//!! DO EDITA !!
//const handleMessageEdit = (event) => {
// const idToEdit = event.target.getAttribute('data-elementId');
// przekazać id edytowanego elementu
// localStorage.setItem('elementToEditId', idToEdit)
//window.location.href = 'edit.html'


const handleListClick = (event) => {
    // żeby dowiedzieć się, który element został kliknięty, musimy użyć event.target.
    // wskazuje ok nonkretnie kliknięty element
    if(event.target.classList.contains('close')) {
        // console.log('element, który został kliknięty', event.target);

        // const idToRemove = event.target.dataset.elementId
        const idToRemove = event.target.getAttribute('data-elementId')
        console.log(idToRemove);
        console.log(event.target)

        removeMessage(idToRemove);

        // usuwa element z HTML
        // potrzebujemy użyć event.target.parentElement.remove, ponieważ chcemy usunąć rodzica buttuna, czyli element li
        event.target.parentElement.remove();
    }



}
// Jęśli chcemy zrobić usuwanie/edycję/wpinanie eventów na rzeczy, które jeszcze nie istnieją (lista html jest pusta), potrzebujemy użyć tzw. propagacji zdarzeń
messagesList.addEventListener('click', handleListClick)

fetchChatmessages();
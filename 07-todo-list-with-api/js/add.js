import { v4 as uuidv4 } from 'uuid';

const addTodo = document.querySelector('#addTodo');
const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');


// funkcja wysyłania na serwer nowego todosa
const postTodo = (todo) => {
    // zapytaj serwer pod adresem poniższym:
    fetch('http://localhost:5000/todos',{
    // aby metodą POST
    method: 'POST',
    // wysłał z następującymi nagłówkami
    headers: { //jaki format danych oczekujemy
      'Content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  }) // i wyświetlił je w innym oknie w lokalizacji pod ścieżką:
  .then(() => {
    window.location.href = 'index.html';
  })
}



//funkcja dodawania nowego todosa po wciśnięciu submita
const handleSubmit = (event) => {
    event.preventDefault();

// nowy obiekt todosa
    const newTodo = {
        id: uuidv4(),
        author: inputAuthor.value,
        title: inputTitle.value
    } 
postTodo(newTodo);
}
addTodo.addEventListener('submit', handleSubmit)

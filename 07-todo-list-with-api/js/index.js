// Napisz aplikacje TodoList. Pod spodem lista wymagan

// 1. Stworz strone z lista todos i zaladuj elementy z API
// 2. Zrob nawigacje, dzieki ktorej bedziesz mogl przejsc do podstrony add
// 3. Na podstronie add, zrob obsluge dodawania elementow todo do API
// 4. Po poprawnym dodaniu do strony, przekieruj na podstrone glowna

// Zadania dodatkowe

// 5. Pod lista todo, dodaj przycisk 'remove todos', ktory spowoduje usuniecie wszystkich todos. Rzeczy do wykonania

//  - Dodaj do pliku server.js obsluge endpointa /todos z metoda HTTP REMOVE
//  - Endpoint bedzie mial za zadanie, wyczyscic tablice todos z pliku todos.json
//  - Jesli operacja sie powiedzie, to wyczysc liste z HTML

// 6. Ostyluj listę

// 7*. Dodaj ikonke X przy kazdym elemencie TODO. Nastepnie za pomoca document.addEventListener('click', handleRemoveTodo) i wlasciwosci event.target spraw, zeby usunac kazdy pojedynczy element. (pamietaj o przekazaniu ID na BE).


const todoList = document.querySelector('#todoList')

let todos =[];

// wyświetlanie listy
const renderTodos = (todos) => {
    todoList.innerHTML += '';

    todos.forEach(todo => {
        todoList.innerHTML += `
        <li>
            <p>${todo.author}</p>
            <p>${todo.title}</p>
            <button class="edit" data-elementId="${todo.id}"> &#9998; </button>                 
            <button class="close" data-elementId="${todo.id}"> x </button>                
        </li>
        `;
    })
}

// //fetch - zapytanie do serwera
// const fetchTodos = () => {
//     fetch('http://localhost:5000/todos')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         renderTodos(data.todos);
//     })
// }

// fetchTodos();

//fetch - zapytanie do serwera
// zadeklarowanie funkcji fetch
const fetchTodos = () => {
    // zapytaj serwera pod adresem
    fetch('http://localhost:5000/todos')
    // żeby zwrócił odpowiedż = odpowiedź w json
    .then(res => res.json())
    // żeby wyświetlił dane z jsona.todos metodą renderTotos, którą napisaliśmy wyżej
    .then(data => {
        console.log(data);
        renderTodos(data.todos);
    })
}


// DELETING Todo

// wskazujemy po atrybucie id co chcemy usunąć i(id usuwanego elementu przekazujemy)

const removeTodo = id => { // operacja na id konkretnego todosa
    fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Udało się!');
    })
}

const handleTodoRemove = (event) => {
    // tworzymy zmienną z id do usunięcia - w tym przypadku id jest atrybutem targetu zdarzenia
    // dlatego potrzebujemy pobrać ten atrybut - czyli id
    const idToRemove = event.target.getAttribute('data-elementId') // ta atrybut, który dopisaliśmy do HTML
    removeTodo(idToRemove);
    event.target.parentElement.remove();
}


// EDITING Todo

const handleTodoEdit = (event) => {
    const idToEdit = event.target.getAttribute('data-elementId')
     // potrzebuje przekazac id edytowanego elementu do podstrony edit, zeby podstrona edit wiedziala jaki element na stronie chcemy edytowac. Robię to zapisując tu w LS i odczytując z LS na stronie edit
    localStorage.setItem('elementToEditId', idToEdit)
    window.location.href = 'edit.html';

}

const handleListClick = (event) => {
    // jeśli target tego zdarzenia, jego clasa zawiera 'close'
    if(event.target.classList.contains('close')) {
    // to wykonaj funkcję handleTodoRemove, która jest zdarzeniem
        handleTodoRemove(event);
    if(event.target.classList.contains('edit')) {
        handleTodoEdit(event);
    }
    console.log(event.target)
}}

// wywołaj metodę zapytania

// Musimy nasłuchiwać całą listę, bo rzeczy, które chcemy by były klikalne jeszcze nie istnieją
// (bo przycisk dodaje się skryptem)
todoList.addEventListener('click', handleListClick)
fetchTodos();


// document.addEventListener('DOMContentLoaded', function(){
//     //odczytanie wartości z pola input
    
//     const addToDoForm = document.querySelector('#addToDoForm');
//     const list = document.querySelector('#list');
//     const addToDoInput = document.querySelector('#addToDoInput');

    

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const inputValue = addToDoInput.value;
//         list.innerHTML += `<li> ${inputValue} </li>`
//     }
    
//     addToDoForm.addEventListener('submit', handleSubmit);


// })


const addTodoForm = document.querySelector('#addTodoForm');
const todoList = document.querySelector('#todoList');
const addTodoInput = document.querySelector('#addTodoInput');
const removeTodosButton = document.querySelector('#removeTodosButton');

let todos = JSON.parse(localStorage.getItem('todos'));
// Robimy to po to, ze poczatkowa wartosc todos nie moze byc null, bo inaczej funkcja forEach by sie wywalila
if(todos === null) {
  todos = [];
}

const handleSubmit = (event) => {
  event.preventDefault(); // Blokowanie domyslnego zachowania przegladarki
  const inputValue = addTodoInput.value;

  todoList.innerHTML += `
    <li> ${inputValue} </li>
  `
  todos.push({ title: inputValue })
  localStorage.setItem('todos', JSON.stringify(todos));

  addTodoInput.value = '';
}

const handleRemoveTodos = () => {
  todoList.innerHTML = '';
  localStorage.removeItem('todos');
}

const renderTodos = () => {
  todos.forEach(todo => {
    todoList.innerHTML += `
      <li> ${todo.title} </li>
    `
  })
}

addTodoForm.addEventListener('submit', handleSubmit);
removeTodosButton.addEventListener('click', handleRemoveTodos)
renderTodos();

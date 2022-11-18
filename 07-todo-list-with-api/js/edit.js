
const editTodoForm = document.querySelector('#editTodo');
const inputTitle = document.querySelector('#inputTitle');
const inputAuthor = document.querySelector('#inputAuthor');

// odczytuję id elementu z LS ze strony index.html w zmiennej idToEdit

const idToEdit = localStorage.getItem('elementToEditId')

if(!idToEdit) {
    window.location.href = 'index.html'
}

// Ta funkcja odpowiada zeby zasilic inputy w dane z BE
const renderDataToHTML = (todo) => {
    inputAuthor.value = todo.author
    inputTitle.value = todo.title
}

// Przekazuję id elementu do edycji do BE
const fetchTodoWithId = (id) => {
    fetch(`http://localhost:5000/todos/${id}`)
    .then(res => res.json())
    .then(data => {
        renderDataToHTML(data)
    })
}

// wysłanie zapytania o edycję PUT
const editTodo = todoObject => {
    fetch(`http://localhost:5000/todos/${idToEdit}`,{
        method: 'PUT',
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(todoObject)
    })
    .then(() => {
        window.location.href = 'index.html';
    })
}

const handleEdit = (event) => {
    event.preventDefault();

    const todoToEdit = {
        author: authorInput.value,
        title: inputTitle.value
    }
    editTodo(todoToEdit)
}

fetchTodoWithId(idToEdit)
editTodoForm.addEventListener('submit', handleEdit)

import fs from 'fs';
const fsp = fs.promises;

// Model budowania aplikacji MVC

// Model, View, Controller

// Model - jeden pojedynczy TODO
//    do tworzenia modeli w JS, uzywa sie tzw systemow ORM np. mongoose

// View - express
// Controller - plik, w ktorym mamy funkcje dotyczace danego zasobu

export const fetchTodos = () => {
    return fsp.readFile('data/todos.json', 'utf8') // ścieżka absolutna
}

export const fetchTodo = (id) => {
  return fetchTodos()
    .then(data => {
      const parsedJSON = JSON.parse(data);
      const foundTodo = parsedJSON.messages.find(message => message.id === id);

      return foundTodo;
    })
}

// todo jest to cały obiekt, który idzie z FrontEndu
export const addTodo = (todo) => {
    return fsp.readFile('data/todos.json', 'utf8')
      .then(data => {
        const parsedJSON = JSON.parse(data);
        // Potrzebuje do odczytanego JSON dodac nowy obiekt a nastepnie go zapisac
        parsedJSON.todos.push(todo);
  
        return fsp.writeFile('data/todos.json', JSON.stringify(parsedJSON), 'utf8'); //zapis
      })
}

export const deleteTodo = (idToDelete) => {
  return fetchTodos()
  .then(data => {
    const parsedJSON = JSON.parse(data);
    const filteredTodos = parsedJSON.todos.filter(todo => {
      return todo.id !== idToDelete
    })
    const fileToSave = {
      todos: filteredTodos
    }
    return fsp.writeFile('data/todos.json', JSON.stringify(fileToSave));
  })
}

export const editTodo = (id, todoToEdit) => {
  return fetchTodos()
  .then(data => {
    const parsedJSON = JSON.parse(data);

    const editedElementIndex = parsedJSON.todos.findIndex(todo => todo.id === id);

    parsedJSON.todos[editedElementIndex].author = todoToEdit.author
    parsedJSON.todos[editedElementIndex].title = todoToEdit.title

    return fsp.writeFile('data/todos.json', JSON.stringify(parsedJSON), 'utf8');
  })
}
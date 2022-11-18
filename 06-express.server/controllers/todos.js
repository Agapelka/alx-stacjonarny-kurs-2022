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
import express from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';

import { addTodo, fetchTodos, fetchTodo, deleteTodo, editTodo } 
from './controllers/todos.js';
// Własny serwer BE
const app = express();

// Uzycie biblioteki bodyParser, zeby przeksztalcana nam format JSON na obiekty JS podczas zapytan POST i PUT
// Dekodowanie parametrów z GET i DELETE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // Pozwala na omijanie w kodzie JSON.parse, bo konwersja robi się automatycznie
// Pozwolenie serwerowi na przyjmowanie requestów z localhost
app.use(cors({ //jest to blokada po stronie przeglądarki
  origin: '*'
})); 

// Pomiędzy zmienną app a nasłuchiwaniem możemy napisać różne funkcje
// Napisaliśmy własny serwer i robimy reakcję na... wejście na główną stronę naszej aplikacji '/' i wyświetlenie komunikatu kontrolnego
// '/' - to ścieżka - nasz adres, punkt wejściowy.

// API - application programming interface
// jest to zbiór endpointów
// to punkt wejściowy naszej aplikacji, który konsumowany jest przez frontend
// różne aplikacje korzystają z tego samego API - aplikacja mobilna, desktopowa, strona www w przeglądarce


// ENDPOINT - Pojedynczy punkt wejściowy do aplikacji
// app.get('/', (req, res) => {
//   res.status(200).send('Hello world')
// })

// ENDPOINT GET - Pojedynczy punkt wejściowy do aplikacji
app.get('/todos', (req, res) => {
    fetchTodos()
      .then(data => {
        res.status(200).send(data)
      })
  })

  app.get('/todos/:id',(req, res) => {
    fetchTodo(req.params.id)
      .then(data => {
        res.status(200).send(data)
      })
  })

//   Controller to zbiór funkcji dotyczący danego zasobu endpointu.
// Trzymamy w nim funkcje. Musimy zaimportować konkretną funkcję z controllera todos

// ENDPOINT POST
app.post('/todos', (req, res) => {
  
    // req.body to jest zawartość bbody, który przyjdzie z zapytania POST

// *TUTAJ JEST MIEJSCE NA WALIDACJĘ
if(!req.body.id) {
    res.status(400).send('Lack of id in the sent request')
}

    addTodo(req.body)
    .then(() => {
        res.status(200).send('OK!')
      })
  })


app.delete('/todos/:id', (req, res) => {
  deleteTodo(req.params.id)
  .then(() => {
    res.status(200).send('OK!');
  })
}) 

app.put('/todos/:id', (req, res) => {
  editTodo(req.params.id, req.body)
    .then(() => {
      res.status(200).send('OK!');
    })

})


// adres naszego API, tu - nasz server postawiony na porcie 5000
app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})
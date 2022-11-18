
//1a
import express from 'express';

import { addMessage, fetchChatmessages, deleteMessage } from './controllers/chatmessages.js'; // dodać getMessage, editMessage
import bodyParser from 'body-parser';
import cors from 'cors';

// 2a
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

//2a -prework
// ENDPOINT - Pojedynczy punkt wejściowy do aplikacji
app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

//2a
// ENDPOINT GET - Pojedynczy punkt wejściowy do aplikacji
app.get('/chatmessages', (req, res) => {
    fetchChatmessages()
      .then(data => {
        res.status(200).send(data)
      })
  })
//   Controller to zbiór funkcji dotyczący danego zasobu endpointu.
// Trzymamy w nim funkcje. Musimy zaimportować konkretną funkcję z controllera todos

//3a
// ENDPOINT POST
app.post('/chatmessages', (req, res) => {
    // req.body to jest zawartość bbody, który przyjdzie z zapytania POST

// *TUTAJ JEST MIEJSCE NA WALIDACJĘ
if(!req.body.id) {
    res.status(400).send('Lack of id in the sent request')
}
addMessage(req.body)
    .then(() => {
        res.status(200).send('OK!')
      })
  })

// ENDPOINT DELETE
// /.:id w ten sposób mówimy, że oczekujemy id w parametrze
// to będzie dostępne w req.params
app.delete('/chatmessages/:id', (req, res) => {
    // console.log(req.params.id);
    deleteMessage(req.params.id)
    .then(() => {
        res.status(200).send('OK')
    }) 

})

// ENDPOINT EDIT




// 3a
// adres naszego API, tu - nasz server postawiony na porcie 5000
app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})
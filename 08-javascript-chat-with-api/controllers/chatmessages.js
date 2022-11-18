import fs from 'fs';
const fsp = fs.promises;

// Model budowania aplikacji MVC

// Model, View, Controller

// Model - jeden pojedynczy TODO
//    do tworzenia modeli w JS, uzywa sie tzw systemow ORM np. mongoose

// View - express
// Controller - plik, w ktorym mamy funkcje dotyczace danego zasobu

export const fetchChatmessages = () => {
    return fsp.readFile('data/chatmessages.json', 'utf8') // ścieżka absolutna
}


// tutaj export z endpointa edycji
      // export const getMessage = (id) => {
        // -------------------------------------------tutaj dokończenie poniżej

        
      //   return fsp.readFile('data/chatmessages.json', 'utf8')
      //     .then(data => {
      //       const parsedJSON = JSON.parse(data);
      //    
      //       parsedJSON.messages.push(message);

      //       return fsp.writeFile('data/chatmessages.json', JSON.stringify(parsedJSON), 'utf8'); //zapis
      //     })
      // }


// todo jest to cały obiekt, który idzie z FrontEndu
export const addMessage = (message) => {
    return fsp.readFile('data/chatmessages.json', 'utf8')
      .then(data => {
        const parsedJSON = JSON.parse(data);
        // Potrzebuje do odczytanego JSON dodac nowy obiekt a nastepnie go zapisac
        parsedJSON.messages.push(message);
  
        return fsp.writeFile('data/chatmessages.json', JSON.stringify(parsedJSON), 'utf8'); //zapis
      })
}

export const deleteMessage = (idToDelete) => {
  return fetchChatmessages()
  .then(data => {
    const parsedJSON = JSON.parse(data)
    const filteredMessages = parsedJSON.messages.filter(message => {
      return message.id !== idToDelete
    })

    const fileToSave = {
      messages: filteredMessages
    }

    return fsp.writeFile('data/chatmessages.json', JSON.stringify(fileToSave));
  })
}
console.log('Hello lista pociagow');

// Stworz projekt o nazwie wyszukiwarka polaczen PKP

// Zadaniem aplikacji jest stworzenie dwoch stron

// Pierwsza strona powinna wyswietlac liste polaczen PKP
// Druga strona powinna zawierac formularz, pozwalajacy dodac nowe polaczenie PKP

// Wymagania:

// 1. Projekt musi byc postawiony za pomoca parcela
// 2. Projekt musi byc projektem npm i zawierac odpowiednie paczki
// 3. Projekt musi zawierac plik gitignore z odpowiednia trescia
// 4. Do pobierania i wysylania danych skorzystaj z json-server

// Wymagania dodatkowe z gwiazdka:

// 5. Na stronie glownej, dodaj wyszukiwarke, ktora bedzie filtrowala polaczenia pociagow
// 6. Stworz dodatkowa strone edit.html i spraw ze mozna edytowac polaczenie pociagu (PUT)

// import { DATABASE_URL } from '../utils/urls.js';

// const trainList = document.querySelector('#trainList');
// let trains =[];



// const renderTrains =(trainsToRender) => {
//     trainList.innerHTML += `
//     <li>
//         <p>
//             <strong>From:</strong> ${trainsToRender.from}<br>
//             <strong>To:</strong> ${trainsToRender.to}<br>
//             <strong>Date:</strong> ${trainsToRender.date}<br>
//             <strong>IsPremium:</strong> ${trainsToRender.isPremium}
//         </p>
//     </li><br>
//     `
// }


// //w ES6 można skracać funkcje strzałkowe
// // można usunąć klamry i słowo return
// // jak funkcja strzałkowa ma tylko jeden argument, można usunąć nawiasy () przy parametrze


// // funkcja Fetch powinna być w osobnej funkcji - napisz

//     fetch(DATABASE_URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((trains) => {
//         trains.forEach((train) => {
//             renderTrains(train);
//         })
//     })
//     .catch((error) =>{
//         console.log(error);
//     })

// renderTrains(trainsDisplay);





// kod od ROGALA-----------------------------

import { DATABASE_URL } from '../utils/urls';

const trainsList = document.querySelector('#trainsList');
const searchTrainForm = document.querySelector('#searchTrainForm')
const searchTrainInput = document.querySelector('#searchTrainInput');

let trains = [];

const renderTrains = (trains) => {
  trainsList.innerHTML = '';

  trains.forEach(train => {
    trainsList.innerHTML += `
      <li>
        <p>Pociag z ${train.from} do ${train.to}</p>
        <p>Data: ${train.date}</p>
      </li>
    `
  })
}

// funkcja Fetch powinna być w osobnej funkcji
const fetchTrains = () => {
  // w ES6 mozna skracac funkcje strzalkowe
  // moza usunac klamry i slowo return
  // jak funckja strzalkowa ma tylko jeden argument, mozna usunac () przy parametrze
  fetch(DATABASE_URL)
    .then(res => res.json())
    .then(data => {
      // potrzebujemy zapisac dane z serwera do globalnej zmiennej, zebysmy po niej mogli filtrowac
      trains = data;
      renderTrains(data);
    })
}

const handleSearch = (event) => {
  event.preventDefault();

  // Musimy odfiltrowac wszystkie wyniki, ktore maja slowo klucze w kluczu "from" lub kluczu "to"
  const filteredTrains = trains.filter(train => {
    return train.from.toLowerCase().includes(searchTrainInput.value.toLowerCase())
      || train.to.toLowerCase().includes(searchTrainInput.value.toLowerCase());
  })

  renderTrains(filteredTrains);
}

fetchTrains();
searchTrainForm.addEventListener('submit', handleSearch)

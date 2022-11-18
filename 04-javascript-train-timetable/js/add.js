console.log('Hello dodaj pociag');


// Zeby za pomoca JS przejsc do strony index.html po wcisnieciu guzika "Dodaj", potrzebujemy uzyc metody

// window.location.href = 'index.html';
import { v4 as uuidv4 } from 'uuid';
import { DATABASE_URL } from '../utils/urls'

const addTrainForm = document.querySelector('#addTrainForm');
const inputFrom = document.querySelector('#inputFrom')
const inputTo = document.querySelector('#inputTo');
const inputDate = document.querySelector('#inputDate');

const postTrain = (train) => {
  fetch(DATABASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(train)
  })
  .then(() => {
    window.location.href = 'index.html';
  })
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newTrain = {
    id: uuidv4(),
    from: inputFrom.value,
    to: inputTo.value,
    date: inputDate.value,
    isPremium: false
  }

  postTrain(newTrain)
}

addTrainForm.addEventListener('submit', handleSubmit)



// Napisz slider

//1. Stwórz tablicę, zawierającą źródła do 5 różnych obrazków
// 2. Na start srony dodaj do obrazka atrybut src z pierwszego elementu tablicy
// 3. Stworz zmienna typu number, ktora bedzie trzymala informacje, ktory jest aktualnie aktywny slajd (uzyj do tego indeksu)
// 4. Po wcisnieciu przycisku next, zmien wartosc licznika, a nastepnie zamien wartosc atrybutu src w obrazku (na nastepny)
// 5. Po wcisnieciu przycisku prev, zmien wartosc licznika, a nastepnie zamien wartosc atrybutu src w obrazku (na poprzedni)
// 6*. Zrob obsluge karuzeli tzn. jak jestesmy na ostatnim obrazku i wcisniemy next, to pokaz pierwszy obrazek, a jak jestesmy na pierwszym obrazku i wcisniemy prev, to pokaz ostatni obrazek. Uzyj do tego zmiennej z licznikiem.

document.addEventListener('DOMContentLoaded', function(){
//1.
const images = [
    'https://zooart.com.pl/blog/wp-content/uploads/2021/12/Dog-Niemiecki-Arlekin-i-Czarny-1000x667-1.jpg', 
    'https://www.purina.co.uk/sites/default/files/2020-11/Working%20Dogs%20Everything%20You%20Need%20to%20KnowTEASER.jpeg',
    'https://highlandcanine.com/wp-content/uploads/2021/01/vizsla-running.jpg',
    'https://www.purina.co.nz/sites/default/files/2020-12/15-Amazing-Dog-FactsTEASER.jpg',
    'https://www.thekennelclub.org.uk/media/3987/800-x-600-2.jpg?mode=crop&width=800&height=600&rnd=132437297640000000'
];

const img_source = document.querySelector('#img_source');
const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');

let counter = 0;
img_source.src = images[counter];

const nextImage = () => {
        counter++;
        if(counter === images.length) {
            counter = 0;
          }
        img_source.src = images[counter];
    }

const prevImage = () => {
    counter--;
    if(counter === -1) {
        counter = images.length - 1;
       }
     
    img_source.src = images[counter];
}
sliderNext.addEventListener('click', nextImage);
sliderPrev.addEventListener('click', prevImage); 
})


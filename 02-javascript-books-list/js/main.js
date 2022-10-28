console.log('Hello World');

const books = [
    {
      title: "Harry Potter i kamień filozoficzny",
      author: "J.K. Rowling",
      year: 1992,
      price: 49.99
    },
    {
      title: "Lord Of The Rings",
      author: 'Tolkien',
      year: 1980,
      price: 19.99
    },
    {
      title: 'God Father',
      author: "Puzo",
      year: 1960,
      price: 29.99
    }
  ]


  // Exercise 1.
// Za pomoca funkcji forEach wyswietl w konsoli authora kazdej ksiazki

books.forEach((book) => {
    console.log(book.author);
    })
    

// Exercise 2.
// Za pomoca funkcji map, stworz tablice zawierajaca authorow ksiazek

const newBooksOnlyWithAuthor = books.map(book => {
    return book.author;
});
console.log(newBooksOnlyWithAuthor);

// Exercise 3.
// Za pomoca funkcji map, stworz tablice zawierajaca ile znakow maja authorzy ksiazek. Podpowiedz: metoda .length dziala rowniez na stringach

const newAuthorStringLength = books.map(book => {
    return book.author.length;
});
console.log(newAuthorStringLength);

// exercise 4.
// Znajdz ksiazke, ktorej author to J.K Rowling

const authorRowling = books.find(book => {
    return book.author.includes('Rowling');
});
console.log(authorRowling);

// Exercise 5.
// Wyszukaj ksiazki, gdzie author na wiecej niz 4 znaki w swojej nazwie (uzyj .length)

const fourLettersMoreAuthor = books.filter(book => {
    return book.author.length > 4;
});
console.log(fourLettersMoreAuthor);

// Exercise 6.

// Oblicz sume cen ksiazek napisanych po 1970 roku

const priceSumAfter1970 = books.filter(book => {
    return book.year > 1970;
});
console.log(priceSumAfter1970);

let bookSum = 0;
priceSumAfter1970.forEach((priceBookSumAfter1970) => {
bookSum += priceBookSumAfter1970.price;
});

console.log(bookSum);


    


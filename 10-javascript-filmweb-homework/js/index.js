const moviesList = document.querySelector('#moviesList')

let movies = [
    // {   "id": "1",
    //     "title": "The Game of Thrones",
    //     "category": "drama, fantasy",
    //     "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    //     "poster": "https://cdn.europosters.eu/image/350webp/135455.webp",
    //     "year": 2011,
    //     "rate": 9.2
    //   },
    //   {
    //     "id": "2",
    //     "title": "Harry Potter and the Philosopher’s stone",
    //     "category": "fantasy, adventure",
    //     "description": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    //     "poster": "https://cdn.europosters.eu/image/350webp/104639.webp",
    //     "year": 2001,
    //     "rate": 7.6
    //   },
];


// renderowanie listy filmów
const renderMovies = (moviesToRender) => {
    moviesToRender.forEach((movie) => {
        moviesList.innerHTML += 
        `<li>
            <h3><b><a href="../singlefilm.html" class="goto" data-elementId="${movie.id}">${movie.title}</a></b></h3>
            ${movie.category}<br><br>
            <img src="${movie.poster}">
        </li>`
    })
};


// READ index
const fetchMovies = () => {
    fetch('http://localhost:5000/movies')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderMovies(data.movies);
    })
}


const handleListClick = (event) => {
    if(event.target.classList.contains('goto')) {
        //pobierz atrybut data-elementId
        const idToGoto = event.target.getAttribute('data-elementId')
    
        console.log(idToGoto);
        console.log(event.target);
    
        localStorage.setItem('elementToGoId', idToGoto)
        window.location.href = '../singlefilm.html'
    }
}
moviesList.addEventListener('click', handleListClick)

fetchMovies();


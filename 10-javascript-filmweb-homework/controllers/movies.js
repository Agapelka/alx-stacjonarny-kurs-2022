import fs from 'fs';
const fsp = fs.promises;

export const fetchMovies = () => {
    return fsp.readFile('data/movies.json', 'utf8')
}
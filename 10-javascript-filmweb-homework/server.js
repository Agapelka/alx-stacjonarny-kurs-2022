import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { fetchMovies } from './controllers/movies.js';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.status(200).send('Everything goes ok!')
})

// ENDPOINT GET
app.get('/movies', (req, res) => {
    fetchMovies()
    .then(data => {
        res.status(200).send(data)
    })
})


// nasłuchiwanie na adresie
app.listen(5000, () => {
    console.log(`Server is running on port 5000`)
})
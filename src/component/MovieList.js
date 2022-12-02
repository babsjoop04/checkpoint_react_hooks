import CardDefaultMovieList from "./CardDefaultMovieList";
import FormAddMovie from "./FormAddMovie";
import FormFilter from "./FormFilter";
import { useState } from "react";



const MovieList = ({ AddedMovies, AddedMoviesCard }) => {


    const [movie, addMovie] = useState([...CardDefaultMovieList, ...AddedMoviesCard]);

    // and to count the number of films
    const [counter, setCounter] = useState([...CardDefaultMovieList, ...AddedMoviesCard].length)

    // definition of state variable used 
    // to display a message 

    const [message, setMessage] = useState("Number of movies")

    return (
        <>
            <div className="container  text-center" id="contprinc2">
                <h1>Welcome</h1>
                <FormFilter AddedMoviesCard={AddedMoviesCard} addMovie={addMovie} setMessage={setMessage} setCounter={setCounter} />
                <br />
                <p className="text-bg-secondary">{message} : {counter}</p>
                <div className="row">
                    {movie}
                </div>
            </div>
            <div className="container mt-5 text-center" id="contprinc1">
                <div className="row" id="add">
                    <FormAddMovie addMovie={addMovie} setCounter={setCounter} AddedMovies={AddedMovies} AddedMoviesCard={AddedMoviesCard} />
                </div>
            </div>
        </>
    );
};

export default MovieList;
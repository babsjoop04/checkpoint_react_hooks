
import FormAddMovie from "./FormAddMovie";
import FormFilter from "./FormFilter";
import { useState } from "react";
import CardDefaultMovieList from "../CardDefaultMovieList";
import FormAddMovie from "./component/FormAddMovie";
import FormFilter from "./component/FormFilter";


// creation of a table for the storage of new films and 
// its definition in the form of a map

let list2 = [], list2Card = [];






const MovieList = () => {


    const [movie, addMovie] = useState([...CardDefaultMovieList, ...list2Card]);


    
    // and to count the number of films
    const [counter, setCounter] = useState([...CardDefaultMovieList, ...list2Card].length)
    
    
    
    
    
    //creation of state variable for display or not of #buttonShow
    
    const [displaystate, setDisplay] = useState("none")
    
    
    // definition of state variable used 
    // to display a message 

    const [message, setMessage] = useState("Number of movies")







    

    return (
        <>
            <div className="container  text-center" id="contprinc2">
                <h1>Welcome</h1>
                <div className="row">
                    <FormFilter Filter={Filter} />
                    <div className="">
                        <button className="btn btn-info" style={{ display: displaystate }} onClick={Show} id="buttonShow">Press here to show full movie list</button>
                    </div>
                </div>
                <br />
                <p className="text-bg-secondary">{message} : {counter}</p>
                <div className="row">
                    {movie}
                </div>
            </div>
            <div className="container mt-5 text-center" id="contprinc1">
                <div className="row" id="add">
                    <FormAddMovie addMovie={addMovie} />
                </div>
            </div>
        </>
    );
};

export default MovieList;
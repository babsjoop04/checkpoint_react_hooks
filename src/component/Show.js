import { useState } from "react";

// import add and filter form
import FormAddMovie from "./FormAddMovie";
import FormFilter from "./FormFilter";

//import component defining a movie as a map
import MovieCard from "./MovieCard";




//import default movie list and added Movies list 

import DefaultMovieList from "./DefaultMovieList";
// import AddedMovies from "./AddedMovies";





let list2 = [], list2Card = []

let list1 = DefaultMovieList.map((element) => {
    return (
        <MovieCard
            title={element.title}
            id={element.id}
            trailerUrl={element.trailerUrl}
            description={element.description}
            posterUrl={element.posterUrl}
            rate={element.rate}
        />
    );
})





const Show = () => {








    // create default movie map board







    // creation and initialization table for movie
    //and state variable for display it


    const [movie, addMovie] = useState([...list1, ...list2Card]);



    // definition of state variable used 
    // to display a message 

    const [message, setMessage] = useState("Number of movies")

    // and to count the number of films
    const [counter, setCounter] = useState([...list1].length)





    //creation of state variable for display or not of #buttonShow

    const [displaystate, setDisplay] = useState("none")

















    //fucntion add new movie

    const Add = () => {


        // collection and storage of data entered
        const title = document.getElementById("title").value;

        const posterUrl = document.getElementById("posterUrl").value;

        const rate = parseInt(document.getElementById("rate").value);

        const description = document.getElementById("description").value;

        const trailerUrl = document.getElementById("trailerUrl").value;


        if (title !== "" && rate !== "" && description !== "" && trailerUrl !== "") {

            list2.push({ title: title, id: 21 + list2.length, trailerUrl: trailerUrl, description: description, posterUrl: posterUrl, rate: rate })
            // added new movie to the list
            list2Card.push(
                <MovieCard
                    title={title}
                    id={21 + list2Card.length}
                    trailerUrl={trailerUrl}

                    description={description}
                    posterUrl={posterUrl || "/defaultPoster.jpg"}
                    rate={rate}
                />
            );









            // update list for display

            addMovie([...list1, ...list2Card]);

            //update the counter of movie

            setCounter([...list1, ...list2Card].length)
        } else
            alert("Please complete this form!!")
    }



    //function filtring
    const Filter = () => {


        //get filter value for list
        let titleOrRate = document.getElementById("filterMode").value

        //creation of a table to store the filtered list

        let tab2 = []


        //filter mode recovery,
        // filtering and updating the list for display

        let tab = document.getElementsByClassName("filterModeinput")


        if (tab[0].checked) {

            if (titleOrRate.length !== 0) {

                tab2 = [...list1, ...list2Card].filter((element) => {
                    return element.props.title.toLowerCase().includes(titleOrRate.toLowerCase())
                })



                // display of the filtered list

                addMovie([...tab2])





                //update message and counter

                setMessage("movies found by filtering")
                setCounter(tab2.length)



                setDisplay("inline")

            } else
                alert("Please give a movie title!!")




        } else if (tab[1].checked) {

            if (titleOrRate !== "") {

                if (parseInt(titleOrRate) >= 0 && parseInt(titleOrRate) <= 100) {
                    tab2 = [...list1, ...list2Card].filter((element) => {
                        return element.props.rate === parseInt(titleOrRate)
                    })





                    addMovie([...tab2])

                    setMessage("movies found by filtering")
                    setCounter(tab2.length)




                    setDisplay("inline")
                }
                else
                    alert("The rating must de between 0 and 100")
            } else
                alert("Please give a rating (number [0,100]) !!")




        } else
            alert("Please select a filter mode !!!")



    };




    //display full list of movies

    const ShowFullMovie = () => {


        addMovie([...list1, ...list2Card])

        setDisplay("none")

        setMessage("Number of movies")

        setCounter([...list1, ...list2Card].length)



    }




    return (
        <>
            <div className="container  text-center" id="contprinc1">
                <h1>Welcome</h1>

                <div className="row">
                    <FormFilter Filter={Filter} />
                    <div className="">
                        <button className="btn btn-info" style={{ display: displaystate }} onClick={ShowFullMovie} id="buttonShow">Press here to show full movie list</button>
                    </div>

                </div>
                <br />
                <p className="text-bg-secondary">{message} : {counter}</p>

                <div className="row" id="deb">

                    {movie}
                </div>

            </div>




            <div className="container mt-5 text-center" id="contprinc2">
                <div className="row" id="add">
                    <FormAddMovie Add={Add} />
                </div>
            </div>

            {/* <Outlet /> */}




        </>
    );
};

export default Show;
import { useMemo, useState } from "react";

// import add and filter form
import FormAddMovie from "./FormAddMovie";
import FormFilter from "./FormFilter";

//import component defining a movie as a map
import MovieCard from "./MovieCard";




//import default movie list and added Movies list 

import DefaultMovieList from "./DefaultMovieList";
// import AddedMovies from "./AddedMovies";








const Show = () => {








    // create default movie map board


    let list1 = useMemo(() => {
        return DefaultMovieList.map((element) => {
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
    }, []);





    // creation and initialization table for movie
    //and state variable for display it


    const [movie, addMovie] = useState([...list1]);



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
            // added new movie to the list
            AddedMovies.push(
                <MovieCard
                    title={title}
                    id={21 + AddedMovies.length}
                    trailerUrl={trailerUrl}

                    description={description}
                    posterUrl={posterUrl || "/defaultPoster.jpg"}
                    rate={rate}
                />
            );









            // update list for display

            addMovie([...list1, ...AddedMovies]);

            //update the counter of movie

            setCounter([...list1, ...AddedMovies].length)
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

                tab2 = [...list1, ...AddedMovies].filter((element) => {
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
                    tab2 = [...list1, ...AddedMovies].filter((element) => {
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


        addMovie([...list1, ...AddedMovies])

        setDisplay("none")

        setMessage("Number of movies")

        setCounter([...list1, ...AddedMovies].length)



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
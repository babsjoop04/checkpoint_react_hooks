import { useState } from "react";
import CardDefaultMovieList from "./CardDefaultMovieList";

const FormFilter = ({ AddedMoviesCard, addMovie, setMessage, setCounter }) => {
    //creation of state variable for display or not of #buttonShow
    const [displaystate, setDisplay] = useState("none")

    const Filter = () => {

        //get filter value for list
        let titleOrRating = document.getElementById("filterMode").value

        //creation of a table to store the filtered list
        let tab2 = []

        let tab = document.getElementsByClassName("filterModeinput")

        if (tab[0].checked) {

            if (titleOrRating.length !== 0) {

                tab2 = [...CardDefaultMovieList, ...AddedMoviesCard].filter((element) => {
                    return element.props.title.toLowerCase().includes(titleOrRating.toLowerCase())
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

            if (titleOrRating !== "") {

                if (parseInt(titleOrRating) >= 0 && parseInt(titleOrRating) <= 100) {
                    tab2 = [...CardDefaultMovieList, ...AddedMoviesCard].filter((element) => {
                        return element.props.rate === parseInt(titleOrRating)
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

    const Show = () => {

        addMovie([...CardDefaultMovieList, ...AddedMoviesCard])

        setDisplay("none")

        setMessage("Number of movies")

        setCounter([...CardDefaultMovieList, ...AddedMoviesCard].length)

    }


    return (
        <>
            <div className="row">
                <div className="col" id="form2">
                    <span className="h6">Choose your filter mode : </span>
                    <span>MovieTitle </span>
                    <input
                        type="radio"
                        name="filterMode"
                        id="filterTitle"
                        className="filterModeinput"
                    />&nbsp;&nbsp;
                    <span>Rate </span>
                    <input
                        type="radio"
                        name="filterMode"
                        id="filterRate"
                        className="filterModeinput"
                    />
                    <br />

                    <div className="input-group mb-3 ">

                        <input type="text" id="filterMode" className="form-control" placeholder="Give a rating or movie title" name="filterMode" />
                        <button className="input-group-text btn btn-info" onClick={Filter}>Filter</button>
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="col">
                    <button className="btn btn-info" style={{ display: displaystate }} onClick={Show} id="buttonShow">Press here to show full movie list</button>
                </div>
            </div>
        </>
    );
};

export default FormFilter;
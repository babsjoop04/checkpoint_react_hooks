import { useState } from "react";





// import add and filter form
import FormAddMovie from "./component/FormAddMovie";
import FormFilter from "./component/FormFilter";

//import component defining a movie as a map
import MovieCard from "./component/MovieCard";


// import display component trailer and description
import DesciptionTrailerShow from "./component/DesciptionTrailerShow";





//import default movie list

import DefaultMovieList from "./component/DefaultMovieList";



import { Routes, Route } from "react-router-dom";









// creation of a table for the storage of new films and 
// its definition in the form of a map

let list2 = [], list2Card = [];



// create default movie list cards

/*

!  remplacer par carddefaultmovieList

let list1 = DefaultMovieList.map((element) => {
  return (
    <MovieCard
      title={element.title}
      id={element.id}
      description={element.description}
      posterUrl={element.posterUrl}
      rate={element.rate}
    />
  );
})

*/

const App = () => {






  // creation and initialization table for movie

  //and state variable for display it


  const [movie, addMovie] = useState([...list1, ...list2Card]);



  // definition of state variable used 
  // to display a message 

  const [message, setMessage] = useState("Number of movies")

  // and to count the number of films
  const [counter, setCounter] = useState([...list1, ...list2Card].length)





  //creation of state variable for display or not of #buttonShow

  const [displaystate, setDisplay] = useState("none")











/*
! partie deplacée dans formAddMovie


  //fucntion add new movie

  const Add = () => {


    // collection and storage of data entered
    const title = document.getElementById("title").value;

    const posterUrl = document.getElementById("posterUrl").value;

    const trailerUrl = document.getElementById("trailerUrl").value;


    const rate = parseInt(document.getElementById("rate").value);

    const description = document.getElementById("description").value;

    if (title !== "" && trailerUrl !== "" && rate !== "" && description !== "") {



      // added a new movie to the list and its map



      list2.push({ title: title, id: list2.length + 21, rate: rate, posterUrl: posterUrl, trailerUrl: trailerUrl, description: description })



      list2Card.push(
        <MovieCard
          title={title}
          id={list2.length + 20}
          description={description}
          posterUrl={posterUrl || "/defaultPoster.jpg"}
          trailerUrl={trailerUrl}
          rate={rate}
        />
      );



      // update list for display

      addMovie([...list1, ...list2Card]);

      //update the counter of movie

      setCounter([...list1, ...list2Card].length)
    } else
      alert("Please complete this form!!!")

  };

  */

  /*
  ! partie deplacée dans formFilter
  
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
    */




  //display full list of movies

  const Show = () => {


    addMovie([...list1, ...list2Card])

    setDisplay("none")

    setMessage("Number of movies")

    setCounter([...list1, ...list2Card].length)



  }







  return (

    <>




      <Routes>

        <Route index path="/" element={<>
          {/* 

        partie deplacée dans MovieList

         */}
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
              <FormAddMovie Add={Add} />
            </div>
          </div>
        </>} />




        <Route path="/movie:id" element={<DesciptionTrailerShow
          arr={[...DefaultMovieList, ...list2]}
        />} />


      </Routes>



    </>

  );
};

export default App;

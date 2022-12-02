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






/*
! deplacée dans MovieList


// creation of a table for the storage of new films and 
// its definition in the form of a map

let list2 = [], list2Card = [];
*/


const App = () => {






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

        <Route index path="/" element={ } />




        <Route path="/movie:id" element={<DesciptionTrailerShow
          arr={[...DefaultMovieList, ...list2]}
        />} />


      </Routes>



    </>

  );
};

export default App;

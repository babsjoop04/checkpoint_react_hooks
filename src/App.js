import { useState } from "react";

// import add form
import FormAddMovie from "./component/FormAddMovie";

//import component defining a movie as a map
import MovieCard from "./component/MovieCard";


//import of the place of viewing of the films

import View from "./component/View";



//import default movie list

import DefaultMovieList from "./component/DefaultMovieList";






// create default movie map board

let list1 = DefaultMovieList.map((element) => {
  return (
    <MovieCard
      title={element.title}
      description={element.description}
      posterUrl={element.posterUrl}
      rate={element.rate}
    />
  );
});


// creation and initialization table for movie display
let deb = [...list1]



// creation table for new film storage
let list2 = [];



const App = () => {


  const [movie, addMovie] = useState(list1);

  //creation of state variable for display or not of #buttonShow

  const [displaystate, setDisplay] = useState("none")




  //fucntion add new movie

  const Add = () => {


    // collection and storage of data entered
    const title = document.getElementById("title").value;

    const posterUrl = document.getElementById("posterUrl").value;

    const rate = document.getElementById("rate").value;

    const description = document.getElementById("description").value;



    // added new movie to the list
    list2.push(
      <MovieCard
        title={title || "unknown"}
        description={description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam exercitationem odio tempore totam saepe ratione numquam pariatur minus dolorem facilis eum soluta ad, aliquid explicabo amet laboriosam. Fugit, unde."}
        posterUrl={posterUrl || "/defaultPoster.jpg"}
        rate={rate || 50}
      />
    );


    deb.push(list2);

    // update list for display

    addMovie([...deb]);
  };



  //function filtring
  const Filter = () => {


    //get filter value for list
    let titleOrRate = document.getElementById("filterMode").value

    let tab2 = []


    //filter mode recovery,
    // filtering and updating the list for display
    let tab = document.getElementsByClassName("filterModeinput")


    if (tab[0].checked) {

      tab2 = deb.filter((element) => {
        return element.props.title.toLowerCase().includes(titleOrRate.toLowerCase())
      })

      if (tab2.length !== 0)
        addMovie([...tab2])
      else
        addMovie(<h1> no movie corresponds to the search</h1>)


      setDisplay("inline")






    } else if (tab[1].checked) {

      console.log(deb);

      tab2 = deb.filter((element) => {
        return element.props.rate === parseInt(titleOrRate)
      })


      if (tab2.length !== 0)
        addMovie([...tab2])
      else
        addMovie(<h1> no movie corresponds to the search</h1>)



      setDisplay("inline")






    }



  };




  //display full list of movies

  const Show = () => {


    addMovie([...deb])
    setDisplay("none")
  }







  return (
    <>
      <View movieList={movie} Filter={Filter} Show={Show} displaystate={displaystate} />


      <div className="container m text-center" id="contprinc1">

        <div className="row p-5" id="add">


          <FormAddMovie Add={Add} />






        </div>

      </div>




    </>
  );
};

export default App;

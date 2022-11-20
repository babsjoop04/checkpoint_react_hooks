import { useMemo, useState } from "react";

// import add and filter form
import FormAddMovie from "./component/FormAddMovie";
import FormFilter from "./component/FormFilter";

//import component defining a movie as a map
import MovieCard from "./component/MovieCard";






//import default movie list

import DefaultMovieList from "./component/DefaultMovieList";









// creation table for new film storage

let list2 = [];


const App = () => {


  // create default movie map board


  let list1 = useMemo(() => {
    return DefaultMovieList.map((element) => {
      return (
        <MovieCard
          title={element.title}
          description={element.description}
          posterUrl={element.posterUrl}
          rate={element.rate}
        />
      );
    })
  }, []);


  // creation and initialization table for movie display
  let deb = [...list1, ...list2]





  const [movie, addMovie] = useState(deb);

  //creation of state variable for display or not of #buttonShow

  const [displaystate, setDisplay] = useState("none")














  //fucntion add new movie

  const Add = () => {


    // collection and storage of data entered
    const title = document.getElementById("title").value;

    const posterUrl = document.getElementById("posterUrl").value;

    const rate = parseInt(document.getElementById("rate").value);

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


    deb = [...list1, ...list2];

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

      if (titleOrRate.length !== 0) {

        tab2 = movie.filter((element) => {
          return element.props.title.toLowerCase().includes(titleOrRate.toLowerCase())
        })

        tab2.length !== 0 ? addMovie([...tab2]) : addMovie(<h1> no movie corresponds to the search</h1>)




        setDisplay("inline")
      } else
        alert("Please give a movie title!!")



    } else if (tab[1].checked) {

      if (titleOrRate !== "") {

        if (parseInt(titleOrRate)) {
          tab2 = movie.filter((element) => {
            return element.props.rate === parseInt(titleOrRate)
          })






          tab2.length !== 0 ? addMovie([...tab2]) : addMovie(<h1> no movie corresponds to the search</h1>)




          setDisplay("inline")
        }
      } else
        alert("give a rating (number [0,100]) !!")




    }



  };




  //display full list of movies

  const Show = () => {


    addMovie([...deb])
    setDisplay("none")

  }







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
        <div className="row">
          {movie}
        </div>

      </div>




      <div className="container mt-5 text-center" id="contprinc1">
        <div className="row" id="add">
          <FormAddMovie Add={Add} />
        </div>
      </div>




    </>
  );
};

export default App;

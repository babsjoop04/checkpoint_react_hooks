import { Routes, Route } from "react-router-dom";
import MovieList from "./component/MovieList";
import { AddedMovies, AddedMoviesCard } from "./component/AddedMovies";
import DesciptionTrailerShow from "./component/DesciptionTrailerShow";


const App = () => {


  return (
    <>
      <Routes>
        <Route index path="/" element={<MovieList AddedMovies={AddedMovies} AddedMoviesCard={AddedMoviesCard} />} />
        <Route path="/movie/:id" element={<DesciptionTrailerShow arr={AddedMovies} />} />
      </Routes>
    </>

  );
};

export default App;

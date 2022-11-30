import { Route, Routes, Link, useParams } from "react-router-dom";
import Show from "./component/Show";
import Home from "./component/Home";
import DesciptionTrailerShow from "./component/DesciptionTrailerShow";


const App = () => {


  return (
    <>
      <Link to="/">Home page</Link><br />
      <Link to="/show/">Movies view and filter page</Link><br />
      <Link to="/show/movie1">Movie#1</Link>




      <Routes>

        <Route index path="/" element={<Home />} />
        <Route path="/show/*" element={<Show />} >


        </Route>


        <Route
          path="/show/movie:id"
          element={<DesciptionTrailerShow />}
        />



      </Routes>


    </>


  );
};

export default App;

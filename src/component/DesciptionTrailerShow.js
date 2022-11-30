import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DefaultMovieList from "./DefaultMovieList";
import AddedMovies from "./AddedMovies";
const DesciptionTrailerShow = () => {

    const changeUrl = useNavigate()

    const params = useParams()
    const [id, setId] = useState(1)

    useEffect(() => {
        setId(params.id)
    }, [params.id])


    return (
        <div className="container" id="contprinc3">
            <div div className="row" >
                <div className="col">
                    <img src={[...DefaultMovieList, ...AddedMovies][id - 1].posterUrl} alt="Movie poster" className="img-thumbnail img-fluid" />
                </div>
                <div className="col">
                    <div className="row">
                        <h1>Description : </h1>
                        <span className="h3">{DefaultMovieList[id - 1].description}</span>
                    </div>
                    <div className="row">
                        <h1>Link to trailer :</h1>
                        <span className="h3">{[...DefaultMovieList, ...AddedMovies][id - 1].trailerUrl}</span>
                    </div>

                    <div className="row">
                        <div className="col" onClick={() => changeUrl("/show")}>
                            <button className="btn btn-info">click here to go back</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default DesciptionTrailerShow;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DefaultMovieList from "./DefaultMovieList";



const DesciptionTrailerShow = ({ arr }) => {


    const changeUrl = useNavigate()

    const params = useParams()

    const [id, setId] = useState(-1)


    useEffect(() => {
        setId(parseInt(params.id))
    }, [params.id])


    return (
        id === -1 ?
            <div className="container text-center" id="contprinc3">
                <button className="btn btn-primary">
                    <span className="spinner-border spinner-border-sm"></span>
                    Loading..
                </button>
            </div> :
            <div className="container text-center" id="contprinc3">
                <div div className="row" >
                    <div className="col">
                        <img src={[...DefaultMovieList, ...arr][id - 1].posterUrl} alt="Movie poster" className="img-thumbnail img-fluid" />
                    </div>
                    <div className="col">
                        <div className="row">
                            <h1>{[...DefaultMovieList, ...arr][id - 1].title}</h1>
                            <span></span>
                            <h1>Description : </h1>
                            <span className="h3">{[...DefaultMovieList, ...arr][id - 1].description}</span>
                        </div>
                        <div className="row">
                            <h1>Link to trailer :</h1>
                            <span className="h3">{[...DefaultMovieList, ...arr][id - 1].trailerUrl}</span>
                        </div>

                        <div className="row">
                            <div className="col" >
                                <button className="btn btn-info" onClick={() => changeUrl("/")}>click here to go back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DesciptionTrailerShow;
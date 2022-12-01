import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";




const DesciptionTrailerShow = ({ arr }) => {


    const changeUrl = useNavigate()

    const params = useParams()

    const [deb, setId] = useState(-1)




    useEffect(() => {
        setId(parseInt(params.id))
    }, [params.id])


    return (
        deb === -1 ?
            <div className="container text-center" id="contprinc3">
                <button class="btn btn-primary">
                    <span class="spinner-border spinner-border-sm"></span>
                    Loading..
                </button>
            </div> :
            <div className="container text-center" id="contprinc3">
                <div div className="row" >
                    <div className="col">
                        <img src={arr[deb - 1].posterUrl} alt="Movie poster" className="img-thumbnail img-fluid" />
                    </div>
                    <div className="col">
                        <div className="row">
                            <h1>{arr[deb - 1].title}</h1>
                            <span></span>
                            <h1>Description : </h1>
                            <span className="h3">{arr[deb - 1].description}</span>
                        </div>
                        <div className="row">
                            <h1>Link to trailer :</h1>
                            <span className="h3">{arr[deb - 1].trailerUrl}</span>
                        </div>

                        <div className="row">
                            <div className="col" onClick={() => changeUrl("/")}>
                                <button className="btn btn-info">click here to go back</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
    );
};

export default DesciptionTrailerShow;
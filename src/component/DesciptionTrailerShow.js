import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const DesciptionTrailerShow = ({ posterUrl, trailerUrl, description, }) => {

    const params = useParams()
    useEffect(() => {
        return console.log(params.id);
    })


    return (
        <div className="col-6">
            <div div className="row" >
                <div className="col">
                    <img src={posterUrl} alt="Movie poster" className="img-thumbnail img-fluid" />
                </div>
                <div className="col">
                    <div className="row">
                        <h6>Description : </h6>
                        <span>{description}</span>
                    </div>
                    <div className="row">
                        <h6>Link to trailer :</h6>
                        <span>{trailerUrl}</span>
                    </div>

                </div>
            </div>
            {/* <Link to="/">Go back home</Link> */}

        </div>
    );
};

export default DesciptionTrailerShow;

import PropTypes from "prop-types";


import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, id, description, posterUrl, rate }) => {


    const changeUrl = useNavigate()



    return (
        <div className="col-3" id={id}>
            <div className="princ1">

                <div className="text-center" id="princ2">
                    <span className="badge bg-primary">New film</span>

                    <div className="row">
                        <div className="col">
                            <img src={posterUrl} alt="Movie poster" className="img-thumbnail img-fluid" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">

                            <h2>Title : {title}</h2>
                            <h2>Rate : {rate}/100</h2>
                        </div>
                    </div>
                    <div className="row">
                        <p>

                            Description : {description.slice(0, 40) + "..."}
                            <button onClick={() => changeUrl(`/movie${id}`)} className="btn btn-info">click here to see more</button>
                        </p>



                    </div>

                </div>

            </div>


        </div>
    );
};


MovieCard.propTypes = {
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    rate: PropTypes.number,
    description: PropTypes.string



}




export default MovieCard;
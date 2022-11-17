


const MovieCard = ({ title, description, posterURL, rate }) => {





    return (
        <div className="col" id="princ1">

            <div className="text-center" id="princ2">
                <span className="badge bg-primary">New film</span>

                <div className="row">
                    <div className="col">
                        <img src={posterURL} alt="Movie poster" className="img-thumbnail img-fluid" />
                    </div>

                </div>
                <div className="row">
                    <div className="col">

                        <h2>Title : {title}</h2>
                        <h2>Rate : {rate}/100</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <details>
                            <summary className="h2">Description</summary>

                            <span>{description}</span>
                        </details>

                    </div>

                </div>

            </div>
        </div>
    );
};




export default MovieCard;
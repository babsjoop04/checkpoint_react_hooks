import { useEffect } from "react";

const View = ({ movieList }) => {

    console.log("from view");
    console.log(movieList);
    useEffect(() => {

        console.log("maj");
    })
    return (
        <div className="container">
            <div className="row">
                {movieList}
            </div>

        </div>
    );
};

export default View;
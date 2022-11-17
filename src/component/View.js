


// import filtring form 
import FormFilter from "./FormFilter";




const View = ({ movieList, Filter, displaystate, Show }) => {



    return (
        <div className="container m-5 text-center" id="contprinc2">
            <h1>Welcome</h1>

            <div className="row">
                <FormFilter Filter={Filter} />
                <div className="col">
                    <button className="btn btn-info"><a href="#add">Go to add form</a></button>&nbsp;
                    <button className="btn btn-info" style={{ display: displaystate }} onClick={Show} id="buttonShow">Press here to show full movie list</button>
                </div>

            </div>
            <div className="row">
                {movieList}
            </div>

        </div>
    );
};

export default View;
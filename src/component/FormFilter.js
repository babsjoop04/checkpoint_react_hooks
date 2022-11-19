
const FormFilter = ({ Filter }) => {




    return (
        <div className="col" id="form2">
            <span className="h6">Choose your filter mode : </span>

            <span>MovieTitle </span>
            <input
                type="radio"
                name="filterMode"
                id="filterTitle"
                className="filterModeinput"
            />&nbsp;&nbsp;


            <span>Rate </span>
            <input
                type="radio"
                name="filterMode"
                id="filterRate"
                className="filterModeinput"
            />
            <br />

            <div className="input-group mb-3 ">

                <input type="text" id="filterMode" className="form-control" placeholder="Give a rating or movie title" name="filterMode" />
                <button className="input-group-text btn btn-info" onClick={Filter}>Filter</button>
            </div>



        </div>
    );
};

export default FormFilter;
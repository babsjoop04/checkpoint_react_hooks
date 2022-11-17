
const FormFilter = ({ Filter }) => {




    return (
        <div className="" id="form2">
            <span>Choose your filter mode : </span>

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

            <input
                id="filterMode"
                className="form-control"
                type="text"
                placeholder="Give a rating or movie title"
                required
            />
            <br />
            <button className="btn btn-primary" onClick={Filter}>
                Filter
            </button>
        </div>
    );
};

export default FormFilter;
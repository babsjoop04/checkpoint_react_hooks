
const FormFilter = ({ Filter }) => {
    return (
        <div className="col" id="form2">
            <h2>Do you want to filter the list of movies ??</h2>

            <img
                src={"/filter1removebgpreview.png"}
                alt=""
                className="img-fluid"
            />

            <h3 htmlFor="filterMode">Choose your filter mode </h3>

            <span>MovieTitle </span>
            <input
                type="radio"
                name="filterMode"
                id="filterTitle"
                className="filterModeinput"
            />
            <br />

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
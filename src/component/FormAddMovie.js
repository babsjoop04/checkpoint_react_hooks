
const FormAddMovie = ({ Add }) => {

    return (
        <>
            {/* form add new movie */}

            <div className="col" id="form1">
                <h2>Please complete this form if you want to add a new movie.</h2>
                <label htmlFor="title">Title :</label>&nbsp;
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="ex : Avengers"
                    className="form-control"
                    required
                />
                <br />
                <label htmlFor="posterUrl">
                    URL Poster: <br />
                    (leave it blank to use the default poster)
                </label>
                &nbsp;
                <input
                    type="text"
                    id="posterUrl"
                    placeholder="Give the movie poster "
                    className="form-control"
                />
                <br />
                <label htmlFor="rate">Rate (0-100)</label>&nbsp;
                <input
                    type="number"
                    min={0}
                    max={100}
                    id="rate"
                    placeholder="Give a rating"
                    className="form-control"
                    required
                />
                <br />
                <label htmlFor="description">Description :</label>&nbsp;
                <textarea
                    name="description"
                    className="form-control"
                    id="description"
                    rows="1"
                    placeholder="Give a description"
                ></textarea>
                <br />
                <button className="btn btn-primary" onClick={Add}>
                    Add
                </button>
            </div>
        </>
    );
};

export default FormAddMovie;
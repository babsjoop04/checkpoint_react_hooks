import MovieCard from "./MovieCard";




const FormAddMovie = ({ addMovie }) => {


    const Add = (arr1, arr2) => {


        // collection and storage of data entered
        const title = document.getElementById("title").value;

        const posterUrl = document.getElementById("posterUrl").value;

        const trailerUrl = document.getElementById("trailerUrl").value;


        const rate = parseInt(document.getElementById("rate").value);

        const description = document.getElementById("description").value;

        if (title !== "" && trailerUrl !== "" && rate !== "" && description !== "") {



            // added a new movie to the list and its map



            arr1.push({ title: title, id: list2.length + 21, rate: rate, posterUrl: posterUrl, trailerUrl: trailerUrl, description: description })



            arr2.push(
                <MovieCard
                    title={title}
                    id={list2.length + 20}
                    description={description}
                    posterUrl={posterUrl || "/defaultPoster.jpg"}
                    trailerUrl={trailerUrl}
                    rate={rate}
                />
            );



            // update list for display

            addMovie([...list1, ...list2Card]);

            //update the counter of movie

            setCounter([...list1, ...list2Card].length)
        } else
            alert("Please complete this form!!!")

    };

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
                <label htmlFor="trailerUrl">
                    Url trailer :
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="trailerUrl"
                    placeholder="Give the link to the trailer"
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

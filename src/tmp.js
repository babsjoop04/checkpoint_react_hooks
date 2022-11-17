// // import { useState } from 'react';
// import MovieCard from './component/MovieCard';
// import defaultMovieList from './component/defaultMovieList';
// import './App.css';

// // import AddMovieList from './component/AddMovieList';




// ! app


// function App() {







//     // eslint-disable-next-line

//     const list = defaultMovieList.map(element => {
// return <MovieCard title={element.title}
//     description={element.description}
//     posterURL={element.posterUrl}
//     rate={element.rate}

// />
//     })


//     console.log(list);









// //     creation of state variables for the #filterMode input

// const [type, setType] = useState(null)
// const [placeHolder, setPlace] = useState(null)

// const [max, setMax] = useState(null)
// const [min, setMin] = useState(null)



// //     def title filter mode

// const filterModeTitle = () => {

//         setType("text")

//         setPlace("Give a movie title")

//         setMax(null)

//         setMin(null)



// }


// //     // def rate filter mode


// const filterModeRate = () => {

//         setType("number")

//         setPlace("Give an rate [0,100]")

//         setMax(100)

//         setMin(0)

// }


//     // function allows to add new movies





//     const AddMovie = () => {
        // const title = document.getElementById("title").value

        // const posterUrl = document.getElementById("posterUrl").value

        // const rate = document.getElementById("rate").value

        // const description = document.getElementById("description").value


//         list.push(<MovieCard title={title}
//             posterURL={posterUrl || "posterDefault.png"}
//             rate={rate}
//             description={description}

//         />)
//         console.log(list);





//     }

//     // const Add = (list) => {


//     // const title = document.getElementById("title").value

//     // const posterUrl = document.getElementById("posterUrl").value.toString()

//     // const rate = document.getElementById("rate").value

//     // const description = document.getElementById("description").value




//     //   AddMovieList({ title: title, posterUrl: posterUrl, rate: rate, description: description }, list)





//     // }










//     return (

//         <>
//             <div className="container" id="formAddFilt">


                // <div className="row p-5">

                //     {/* form add new movie */}

                //     <div className="col" id="form1">
                //         <h2>Please complete this form if you want to add a new movie.</h2>
                //         <label htmlFor="title">Title :</label>&nbsp;
                //         <input type="text" name="title" id="title" placeholder="ex : Avengers" className="form-control" required /><br />

                //         <label htmlFor="posterUrl">URL Poster: (if you haven't, leave this field empty to use the default poster)</label>&nbsp;
                //         <input type="text" id="posterUrl" placeholder="Give the movie poster " className="form-control" /><br />

                //         <label htmlFor="rate">Rate (0-100)</label>&nbsp;
                //         <input type="number" min={0} max={100} id="rate" placeholder="Give an rate" className="form-control" required /><br />

                //         <label htmlFor="description">Description :</label>&nbsp;
                //         <textarea name="description" className='form-control' id="description" rows="1" placeholder='Give a description'></textarea><br />

                //         <button className="btn btn-primary" onClick={AddMovie} >Add</button>
                //     </div>




                //     <div className="col"></div>


                //     {/* Form filter movie list */}


                //     <div className="col" id="form2">

                //         <h2>Do you want to filter the list of movies ??</h2>

                //         <img src={"/filter1removebgpreview.png"} alt="" className='img-fluid' />

                        // <h3 htmlFor="filterMode">Choose your filter mode </h3>

                        // <span>MovieTitle </span>
                        // <input type="radio" name='filterMode' id='filterTitle' /><br />


                        // <span>Rate </span>
                        // <input type="radio" name='filterMode' id='filterRate' /><br />

                        // <input id="filterMode" className="form-control" type={"type"} placeholder={"placeHolder"} min={"min"} max={"max"} required /><br />
                        // <button className="btn btn-primary">Filter</button>


                //     </div>
                // </div>


//             </div>

//             {/* movie item */}
//             <div className="container my-5" id='movieItem'>

//                 <div className="row">

//                     {list}
//                 </div>

//             </div>


//         </>
//     );
// }




// ! addMovie
// const AddMovieList = ({ title, posterUrl, rate, description }) => {


//     MovieList.push({ title: title, posterUrl: posterUrl, rate: rate, description: description })


//     console.log(MovieList);


//     // eslint-disable-next-line
//     const list = MovieList.map((element) => {
//         React.createElement(
//             React.Fragment,
//             null,
//             <MovieCard title={element.title} description={element.description} posterURL={element.posterUrl} rate={element.rate} />
//         )
//     })

//     return list















// };
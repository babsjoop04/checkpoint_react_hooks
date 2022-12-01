import DefaultMovieList from "./component/DefaultMovieList";
import MovieCard from "./component/MovieCard";



const CardDefaultMovieList = DefaultMovieList.map((element) => {
    return <MovieCard
        title={element.title}
        id={element.id}
        description={element.description}
        posterUrl={element.posterUrl}
        rate={element.rate}
    />
})

export default CardDefaultMovieList
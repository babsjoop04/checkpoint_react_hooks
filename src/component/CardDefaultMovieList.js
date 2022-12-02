import DefaultMovieList from "./DefaultMovieList";
import MovieCard from "./MovieCard";



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
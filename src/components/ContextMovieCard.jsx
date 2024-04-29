import { useEffect, useState } from "react"
import { getMovies } from "../data/httpClient"
import { MovieCard } from "./MovieCard"
import "./ContextMovieCard.css"

export function ContextMovieCard() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        getMovies("/discover/movie")
        .then((response) => {
            setMovies(response.results)
        })
    },[])
    return (
        <ul className="container">
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}
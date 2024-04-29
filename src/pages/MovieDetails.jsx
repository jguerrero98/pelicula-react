import { useParams } from "react-router-dom"
import { getMovies } from "../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieImg } from "../utils/getMovieImg"
import "./MovieDetails.css"

export function MovieDetails() {
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    const [generos, setGeneros] = useState([])
    useEffect(() => {
        getMovies("/movie/"+movieId)
        .then((response) => {
            setMovie(response)
            setGeneros(response.genres.map((gen) => gen.name).join(", "))
        })
    },[movieId])
    const imageUrl = getMovieImg(movie.poster_path, 500)
    return (
        <div className="detailsContainer">
            <img src={imageUrl}
            alt={movie.title} className="col movieImage" />
            <div className="col movieDetails">
                <p className="title">
                    <strong>
                        Title: 
                    </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>
                        Generos: 
                    </strong>
                    {generos}
                </p>
                <p>
                    <strong>
                        Descripcion: 
                    </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}
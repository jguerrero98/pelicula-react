import styles from "./MovieCard.module.css"
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({movie}) {

    const imageUrl=getMovieImg(movie.poster_path, 300)
    

    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/"+movie.id}>
                <img className="movieImage"
                width={230}
                height={345}
                src={imageUrl}
                alt={movie.title} />
            </Link>
            <div className={styles.title}>
                {movie.title}
            </div>
        </li>
    )
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/pelicula-react/build/" element={<LandingPage />} />
                <Route exact path="/pelicula-react/build/movies/:movieId" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
}
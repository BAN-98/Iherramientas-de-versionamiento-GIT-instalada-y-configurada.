import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css"

export function MovieDatils() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        get('/movie/' + movieId)
            .then((data) => {
                setMovie(data);
                setGeneros(data.genres[0])
            });
    }, [movieId]);



    // Verificar si movie.poster_path existe antes de acceder a él
    const imageURL = getMovieImg(movie.poster_path, 500);


    return (
        <div
            className="detailsContainer">
            <img
                src={imageURL}
                alt={movie.title}
                className="col movieImage"
            />
            <div
                className="col movieDetails">
                <div>
                    <p
                        className="title">
                        <strong>Título : </strong>
                        {movie.title}
                    </p>
                    <p>
                        <strong>Género : </strong>
                        {generos.name}
                    </p>

                    <p>
                        <strong>Descripcion : </strong>
                        {movie.overview}
                    </p> 
                </div>
            </div>
        </div>
    );
}

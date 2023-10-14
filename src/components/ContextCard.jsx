import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import "../components/ContextCard.css";

export function ContextCard() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Use una función async para realizar la solicitud al servidor.
        const fetchData = async () => {
            try {
                const data = await get("/discover/movie");
                setMovies(data.results);
            } catch (error) {
                // Manejo de errores si la solicitud falla.
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData(); // Llama a la función fetchData() para realizar la solicitud.

        // Agrega un arreglo vacío como dependencia para asegurar que la solicitud solo se haga una vez.
    }, []);

    return (
        <ul className="container">
            {movies.map((movie) => (
                <MovieCard
                    movie={movie}
                    key={movie.id} // Cambié "movie.key" por "movie.id" suponiendo que tengas una propiedad "id" en tu objeto movie.
                />
            ))}
        </ul>
    );
}


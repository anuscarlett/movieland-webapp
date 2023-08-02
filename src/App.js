import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=a82bd39d'


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json();

        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('barbie')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Type in the movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}


        </div>
    );
}
export default App;
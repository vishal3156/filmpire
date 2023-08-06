import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
//4b4f0ba0

const API_URL = 'http://www.omdbapi.com?apikey=4b4f0ba0';

const movie = {
  Poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  Title: "John Wick",
  Type: "movie",
  Year: "2014",
  imdbID: "tt2911666"
}

export default function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    }

    useEffect(() => {
      searchMovies('fast and furious');
    }, []);
    
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          onChange ={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src = {SearchIcon}
          alt = "search"
          onClick = {() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

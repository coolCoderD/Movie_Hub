import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?apikey=f9d29ec7';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getRandomSearchTerm = () => {
    const keywords = ['Spiderman', 'Batman', 'Star Wars', 'Avengers', 'Inception'];
    return keywords[Math.floor(Math.random() * keywords.length)];
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    setMovies((await response.json()).Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') searchMovies(search);
  };

  useEffect(() => {
    const randomSearchTerm = getRandomSearchTerm();
    searchMovies(randomSearchTerm);
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieHub</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} m={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

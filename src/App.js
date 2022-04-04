import { useState, useEffect } from "react";
import './App.css';
import Contact from "./contact";
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=9275b204';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    SearchMovies('all');
  }, []);

  return (
    <div className="app">
      <h1>Netflex</h1> 
      <p className="header">Enjoy the finest quality movies!</p>

      <div className="search">
      <input 
      placeholder="Search for a movie"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
       />
       <img src={SearchIcon}
        alt="search"
        onClick={() => SearchMovies(searchTerm)} 
        />
  </div>

       {
        movies?.length > 0 ?
        (
          <div className="container">
         {movies.map((movie) => (
             <MovieCard movie={movie} />
         ))}
          </div>
        ):
        (
          <div className="empty">
            <h2>No movies found!</h2>
          </div>
        )
       }

          <Contact />

    </div>


  );
}

export default App;

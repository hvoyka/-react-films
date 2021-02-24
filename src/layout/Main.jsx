import React, {useState, useEffect} from "react";

import { MoviesList } from "../components/MoviesList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main () {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

 

  const loadSearchResult = (searchString, filter = "") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&type=${filter}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies( data.Search);
        setLoading(false);

      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(()=>{
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies( data.Search);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  },[]);

  return (
    <main className="content container">
      <Search loadSearchResult={loadSearchResult} />
      {loading ? <Preloader /> : <MoviesList movies={movies} />}
    </main>
  );

}
export { Main };

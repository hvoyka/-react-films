import React from "react";

import { MoviesList } from "../components/MoviesList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search });
      });
  }

  loadSearchResult = (searchString, filter = "") => {
    this.setState({ filter });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&type=${filter}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") this.setState({ movies: data.Search });
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <main className="content container">
        <Search loadSearchResult={this.loadSearchResult} />
        {movies.length ? <MoviesList movies={movies} /> : <Preloader />}
      </main>
    );
  }
}
export { Main };

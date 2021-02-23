import React from "react";

import { MoviesList } from "../components/MoviesList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  }

  loadSearchResult = (searchString, filter = "") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&type=${filter}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content container">
        <Search loadSearchResult={this.loadSearchResult} />
        {loading ? <Preloader /> : <MoviesList movies={movies} />}
      </main>
    );
  }
}
export { Main };

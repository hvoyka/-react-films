import { Movie } from "./Movie";

function MoviesList(props) {
  const { movies = [] } = props;
  return (
    <div className="movies__list">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing found :(</h4>
      )}
    </div>
  );
}
export { MoviesList };

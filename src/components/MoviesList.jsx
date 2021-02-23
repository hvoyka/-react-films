import { Movie } from "./Movie";

function MoviesList(props) {
  const { movies } = props;
  return (
    <div className="movies__list">
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
}
export { MoviesList };

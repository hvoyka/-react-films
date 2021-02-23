function Movie(props) {
  const { Title: title, Year: year, Type: type, Poster: poster } = props;

  return (
    <div className="movies__list-item">
      <div className="card">
        <div className="card__image">
          {poster === "N/A" ? (
            <img
              src={`https://via.placeholder.com/300x450?text=${title}`}
              alt="Placeholder"
            />
          ) : (
            <img src={poster} alt={`${title} popster`} />
          )}
        </div>
        <div className="card__content">
          <span className="card__title">{title}</span>
          <p>info</p>
          <span>{year}</span> <span>{type}</span>
        </div>
      </div>
    </div>
  );
}
export { Movie };

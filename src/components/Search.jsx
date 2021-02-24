import React, {useState} from "react";

function Search ({loadSearchResult = Function.prototype}) {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
    loadSearchResult(search, filter);
    }
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    loadSearchResult(search, e.target.value);
    
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          placeholder="Search"
          className="validate"
          value={search}
          onChange={(e) => setSearch( e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="search__btn waves-effect waves-light btn-small"
          onClick={() =>
          loadSearchResult(search, filter)
          }
        >
          Search <i className="material-icons right">search</i>
        </button>
      </div>
      <div className="search__filter">
        <label>
          <input
            className="with-gap"
            name="filter"
            type="radio"
            value=""
            onChange={handleFilter}
            checked={filter === ""}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="filter"
            type="radio"
            value="movie"
            onChange={handleFilter}
            checked={filter === "movie"}
          />
          <span>Movie</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="filter"
            type="radio"
            value="series"
            onChange={handleFilter}
            checked={filter === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
}
export { Search };

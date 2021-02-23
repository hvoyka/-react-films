import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    filter: "",
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.loadSearchResult(this.state.search, this.state.filter);
    }
  };
  handleFilter = (e) => {
    this.setState(
      () => ({ filter: e.target.value }),
      () => {
        this.props.loadSearchResult(this.state.search, this.state.filter);
      }
    );
  };

  render(props) {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            placeholder="Search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKeyDown}
          />
          <button
            className="search__btn waves-effect waves-light btn-small"
            onClick={() =>
              this.props.loadSearchResult(this.state.search, this.state.filter)
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
              onChange={this.handleFilter}
              checked={this.state.filter === ""}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="filter"
              type="radio"
              value="movie"
              onChange={this.handleFilter}
              checked={this.state.filter === "movie"}
            />
            <span>Movie</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="filter"
              type="radio"
              value="series"
              onChange={this.handleFilter}
              checked={this.state.filter === "series"}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}
export { Search };

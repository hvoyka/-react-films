import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.loadSearchResult(this.state.search);
    }
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
            onClick={() => this.props.loadSearchResult(this.state.search)}
          >
            Search <i className="material-icons right">search</i>
          </button>
        </div>
      </div>
    );
  }
}
export { Search };

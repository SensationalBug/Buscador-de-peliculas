import React, { Component } from "react";

const API_KEY = "9ac98998";
export class SearchForm extends Component {
  state = {
    inputMovie: "",
  };

  _handleChange = (e) => {
    let inputValue = e.target.value;
    this.setState({ inputMovie: inputValue });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((data) => {
        const { Search = [], totalResults = "0" } = data;
        console.log(Search, totalResults);
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="input-group buscar mb-3">
          <input
            aria-describedby="searchButton"
            className="form-control"
            placeholder=""
            onChange={this._handleChange}
            type="text"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-dark" id="searchButton">
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

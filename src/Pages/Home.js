import React, { Component } from "react";
import { Title } from "../componentes/Title";
import { SearchForm } from "../componentes/SearchForm";
import { MoviesList } from "../componentes/MoviesList";

export class Home extends Component {
  state = { userSearch: false, results: [] };

  _handleResults = (results) => {
    this.setState({ results, userSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>Sorry! 😒 file not found</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }
  render() {
    return (
      <div>
        <Title>Buscador de Peliculas</Title>
        <div className="container">
          <SearchForm onResults={this._handleResults} />
          {this.state.userSearch ? (
            this._renderResults()
          ) : (
            <p>Busca una película</p>
          )}
        </div>
      </div>
    );
  }
}

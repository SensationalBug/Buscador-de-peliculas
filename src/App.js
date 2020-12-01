import React, { Component } from "react";
import { Title } from "./componentes/Title";
import { SearchForm } from "./componentes/SearchForm";
import { MoviesList } from "./componentes/MoviesList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
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
      <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className="container">
          <SearchForm onResults={this._handleResults} />
          {this.state.userSearch ? (
            this._renderResults()
          ) : (
            <small>Busca una película con el form de encima</small>
          )}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Title } from "./componentes/Title";
import { SearchForm } from "./componentes/SearchForm";
import { MoviesList } from "./componentes/MoviesList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = { results: [] };

  _handleResults = (results) => {
    this.setState({ results });
  };

  render() {
    return (
      <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className="container">
          <SearchForm onResults={this._handleResults} />
          {this.state.results.length === 0 ? (
            <p>Busca una pelicula</p>
          ) : (
            <MoviesList movies={this.state.results} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

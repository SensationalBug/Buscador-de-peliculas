import React, { Component } from "react";
import { Movie } from "./Movie";
import PropTypes from "prop-types";

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };
  render() {
    const { movies } = this.props;
    return (
      <div className="row">
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="col-sm-4 col-lg-3">
              <Movie
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

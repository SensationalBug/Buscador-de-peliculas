import React, { Component } from "react";
import PropTypes from "prop-types";

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
  };
  render() {
    const { title, year, poster } = this.props;
    return (
      <div className="card-deck">
        <div className="card my-2">
          <img src={poster} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{year}</p>
          </div>
        </div>
    </div>   
    );
  }
}

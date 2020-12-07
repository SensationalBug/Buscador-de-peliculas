import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const API_KEY = "9ac98998";

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    // match: PropTypes.shape({
    //   params: PropTypes.object,
    //   isExact: PropTypes.bool,
    //   path: PropTypes.string,
    //   url: PropTypes.string,
    // }),
  };

  state = { movie: {}, modalWindow: false };

  _fectMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        this.setState({ movie });
      });
  }

  openModal = () => {
    console.log(this.state.modalWindow);
    if (this.state.modalWindow) {
      this.setState({ modalWindow: false });
    } else {
      this.setState({ modalWindow: true });
    }
  };

  componentDidMount() {
    const { id } = this.props;
    this._fectMovie({ id });
  }
  render() {
    const { id, title, year, poster } = this.props;
    const { Title, Poster, Actors, Plot } = this.state.movie;
    return (
      <div>
        <div className="card-deck">
          <div className="card my-2">
            {/* <Link to={`/detail/${id}`}> */}
            <div onClick={this.openModal}>
              <img
                href={`id=${id}`}
                src={poster}
                className="card-img-top"
                alt={title}
              />
            </div>
            {/* </Link> */}
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{year}</p>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modalWindow}>
          <ModalHeader>
            <h2>{Title}</h2>
          </ModalHeader>
          <ModalBody>
            <img src={Poster} alt="" className="card-img-top" />
            <h3 className="py-3">{Actors}</h3>
            <p className="text-justify">{Plot}</p>
          </ModalBody>
          <ModalFooter>
            <button
              class="btn btn-secondary"
              onClick={this.openModal}
              type="button"
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

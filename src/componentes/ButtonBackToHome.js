import React, { Component } from "react";

export class BackToHome extends Component {
  _goBack() {
    window.history.back();
  }
  render() {
    return (
      <button className="btn btn-primary" onClick={this._goBack}>
        Volver a la página principal
      </button>
    );
  }
}

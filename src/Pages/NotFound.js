import React, { Component } from "react";
import { BackToHome } from "../componentes/ButtonBackToHome";

export class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="py-5">404 Not Found</h1>
        <BackToHome />
      </div>
    );
  }
}

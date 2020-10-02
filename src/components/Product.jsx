import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div style={{ height: "100%", width: "300px" }} className=" col-3 mb-3">
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src="https://e7.pngegg.com/pngimages/674/742/png-clipart-iphone-x-front-iphone-x.png"
            alt
          />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}

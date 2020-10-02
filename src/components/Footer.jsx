import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "black" }}
      >
        <h3 style={{ color: "white", textAlign: "center" }}>PROMOTION</h3>
        <div className="container p-4" style={{ backgroundColor: "white" }}>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "blue",
              }}
            ></div>
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "blue",
              }}
            ></div>
            <div
              style={{
                height: "200px",
                width: "300px",
                backgroundColor: "blue",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

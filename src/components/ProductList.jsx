import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }} className="container-fluid">
        <h3
          style={{
            color: "white",
            textAlign: "center",
            padding: "15    px 0",
          }}
        >
          BEST SMARTPHONE
        </h3>
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    );
  }
}

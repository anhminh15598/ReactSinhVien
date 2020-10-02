import React, { Component } from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./ProductList";

export default class Bt1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

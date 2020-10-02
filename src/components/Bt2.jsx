import React, { Component } from "react";
import "./bt2.css";

export default class Bt2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangXe: [
        {
          maSP: 1,
          tenSP: "black car",
          hinhAnh: "./img/CarBasic/products/black-car.jpg",
          gia: 1000,
        },
        {
          maSP: 2,
          tenSP: "red car",
          hinhAnh: "./img/CarBasic/products/red-car.jpg",
          gia: 2000,
        },
        {
          maSP: 3,
          tenSP: "silver car",
          hinhAnh: "./img/CarBasic/products/silver-car.jpg",
          gia: 3000,
        },
        {
          maSP: 3,
          tenSP: "Steel car",
          hinhAnh: "./img/CarBasic/products/steel-car.jpg",
          gia: 3000,
        },
      ],
      xe: {
        maSP: 1,
        tenSP: "black car",
        hinhAnh: "./img/products/black-car.jpg",
        gia: 1000,
      },
      header: "Show Car",
    };
  }

  clickRed = (mauXe) => {
    switch (mauXe) {
      case "red":
        this.setState({
          xe: { hinhAnh: this.state.mangXe[1].hinhAnh },
        });
        break;
      case "silver":
        this.setState({
          xe: { hinhAnh: this.state.mangXe[2].hinhAnh },
        });
        break;
      case "black":
        this.setState({
          xe: { hinhAnh: this.state.mangXe[0].hinhAnh },
        });
        break;

      default:
        break;
    }
  };

  render() {
    console.log(this.state.xe);
    return (
      <div>
        <div className="main">
          <div className="showCar">
            <h1>{this.state.header}</h1>
            <img src={this.state.xe.hinhAnh} />
          </div>
          <div className="changeColor">
            <h1>Change color</h1>
            <div className="color">
              <button
                onClick={() => {
                  this.clickRed("red");
                }}
                className="red"
              >
                Red color
              </button>
              <button
                onClick={() => {
                  this.clickRed("silver");
                }}
                className="silver"
              >
                Silver color
              </button>
              <button
                onClick={() => {
                  this.clickRed("black");
                }}
                className="black"
              >
                Black color
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

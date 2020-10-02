import React, { Component } from "react";
import "./bt3.css";

export default class bt3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSP: [
        {
          maSP: 1,
          tenSP: "black car",
          hinhAnh: "./img/products/black-car.jpg",
          gia: 1000,
        },
        {
          maSP: 2,
          tenSP: "red car",
          hinhAnh: "./img/products/red-car.jpg",
          gia: 2000,
        },
        {
          maSP: 3,
          tenSP: "silver car",
          hinhAnh: "./img/products/silver-car.jpg",
          gia: 3000,
        },
        {
          maSP: 4,
          tenSP: "steel car",
          hinhAnh: "./img/products/steel-car.jpg",
          gia: 3000,
        },
      ],
      default: {
        maSP: 1,
        tenSP: "black car",
        hinhAnh: "./img/products/black-car.jpg",
        gia: 1000,
      },
    };
  }
  changeCar = (color) => {
    let mauXe = this.state.mangSP.filter((mx) => mx.tenSP === color);
    this.setState({
      default: mauXe[0],
    });
  };
  render() {
    return (
      <div className="main">
        <div className="showCar">
          <div className="imgCar">
            <img
              style={{ height: "100%" }}
              src={this.state.default.hinhAnh}
              alt=""
            />
          </div>
          <div className="detail">
            <h1>See More LX Features</h1>
            <div className="table">
              <table>
                <tbody>
                  <tr>
                    <th>Color</th>
                    <th>Black</th>
                  </tr>
                  <tr>
                    <td>text</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>text</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>text</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>text</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>text</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>text</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="changeColor">
          <div className="title">
            <p>Exterior Color</p>
          </div>
          <div className="imgColor">
            <div
              onClick={() => {
                this.changeCar("black car");
              }}
              className="itemColor"
            >
              <img src="./img/icons/icon-black.jpg" alt="" />
              <div className="itemName">
                <h3>Crystal Black</h3>
                <p>Pearl</p>
              </div>
            </div>
            <div
              onClick={() => {
                this.changeCar("steel car");
              }}
              className="itemColor"
            >
              <img src="./img/icons/icon-steel.jpg" alt="" />
              <div className="itemName">
                <h3>Moderm Steel</h3>
                <p>Pearl</p>
              </div>
            </div>
            <div
              onClick={() => {
                this.changeCar("silver car");
              }}
              className="itemColor"
            >
              <img src="./img/icons/icon-silver.jpg" alt="" />
              <div className="itemName">
                <h3>Lunar Silver</h3>
                <p>Pearl</p>
              </div>
            </div>
            <div
              onClick={() => {
                this.changeCar("red car");
              }}
              className="itemColor"
            >
              <img src="./img/icons/icon-red.jpg" alt="" />
              <div className="itemName">
                <h3>Rallye Red</h3>
                <p>Pearl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

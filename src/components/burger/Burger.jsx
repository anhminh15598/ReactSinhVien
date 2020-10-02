import React, { Component } from "react";
import Menu from "./Menu";
import "./style.css";

export default class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danhSachMonAn: props.name,
      soLuongSalad: [],
    };
    this.setState({
      danhSachMonAn: this.props.name.salad,
    });
  }

  renderSalad = () => {
    return <div className="salad"></div>;
  };

  renderThucAn = () => {
    console.log("props", this.props.name.burgerState.burger.salad);
    let soLuong = [];
    for (let i = 0; i <= this.props.name.burgerState.burger.salad; i++) {
      soLuong = this.state.soLuongSalad.push(...i);
    }
    console.log(soLuong);
  };
  render() {
    return (
      <div>
        <div className="burger">
          <h1>Cửa hàng berger Cybersoft</h1>
          <div className="breadTop"></div>
          <div className="chonThucAn">
            <p>Chọn thức ăn</p>
          </div>

          {this.renderThucAn()}
          <div className="salad"></div>
          <div className="cheese"></div>
          <div className="beef"></div>
          <div className="breadBottom"></div>
        </div>
        <div className="chose"></div>
      </div>
    );
  }
}

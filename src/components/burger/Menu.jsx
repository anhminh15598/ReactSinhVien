import React, { Component } from "react";
import Burger from "./Burger";
import "./style.css";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerState: {
        burger: { salad: 1, cheese: 1, beef: 1 },
        menu: {
          salad: 10,
          cheese: 20,
          beef: 55,
        },
        total: 85,
      },
      total: 85,
      salad: 1,
      cheese: 1,
      beef: 1,
    };
  }

  // renderThucAn = () => {
  //   return <div>{this.state.default.addSalad}</div>;
  // };

  btnAdd = (item) => {
    if (item == "salad") {
      this.state.burgerState.burger.salad++;
      this.state.burgerState.menu.salad += 10;
      this.setState({
        salad: this.state.burgerState.burger.salad,
      });
      console.log(this.state);
    } else if (item == "cheese") {
      this.state.burgerState.burger.cheese++;
      this.state.burgerState.menu.cheese += 20;
      this.setState({
        salad: this.state.burgerState.burger.cheese,
      });
    } else if (item == "beef") {
      this.state.burgerState.burger.beef++;
      this.state.burgerState.menu.beef += 55;
      this.setState({
        salad: this.state.burgerState.burger.beef,
      });
    }
    this.setState({
      total:
        this.state.burgerState.menu.salad +
        this.state.burgerState.menu.cheese +
        this.state.burgerState.menu.beef,
    });
  };
  btnMinus = (item) => {
    if (this.state.burgerState.burger.salad > 0) {
      if (item == "salad") {
        this.state.burgerState.burger.salad--;
        this.state.burgerState.menu.salad -= 10;
      } else if (item == "cheese") {
        this.state.burgerState.burger.cheese--;
        this.state.burgerState.menu.cheese -= 20;
      } else {
        this.state.burgerState.burger.beef--;
        this.state.burgerState.menu.beef -= 55;
      }
      this.setState({
        default: {
          total:
            this.state.burgerState.menu.salad +
            this.state.burgerState.menu.cheese +
            this.state.burgerState.menu.beef,
        },
      });
    }
  };
  render() {
    return (
      <div className="main">
        <Burger name={this.state}></Burger>
        <div className="menu">
          <h1>Chọn thưc ăn</h1>
          <table className="colunmn">
            <tr>
              <th>Thức ăn</th>
              <th className="activity">Hành động</th>
              <th>Giá</th>
            </tr>
            <tr>
              <td>Salad</td>
              <td className="button">
                <button
                  onClick={() => {
                    this.btnAdd("salad");
                  }}
                  className="btn-add"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    this.btnMinus("salad");
                  }}
                  className="btn-minus"
                >
                  -
                </button>
              </td>
              <td>10</td>
            </tr>
            <tr>
              <td>Cheese</td>
              <td className="button">
                <button
                  onClick={() => {
                    this.btnAdd("cheese");
                  }}
                  className="btn-add"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    this.btnMinus("cheese");
                  }}
                  className="btn-minus"
                >
                  -
                </button>
              </td>
              <td>20</td>
            </tr>
            <tr>
              <td>Beef</td>
              <td className="button">
                <button
                  onClick={() => {
                    this.btnAdd("beef");
                  }}
                  className="btn-add"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    this.btnMinus("beef");
                  }}
                  className="btn-minus"
                >
                  -
                </button>
              </td>
              <td>55</td>
            </tr>
            <tr>
              <td>Tổng tiền: {this.state.total}</td>
            </tr>
            <tr>
              <td>
                <button className="btn-thanhToan">Thanh toán</button>
              </td>
            </tr>
          </table>
        </div>{" "}
      </div>
    );
  }
}

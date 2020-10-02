import React, { Component } from "react";
import Child from "./Child";

export default class Home extends Component {
  render() {
    let name = "Nguyen Anh Minh";
    return (
      <div>
        <Child name={name}></Child>
      </div>
    );
  }
}

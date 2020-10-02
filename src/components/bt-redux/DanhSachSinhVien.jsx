import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";
import SinhVien from "./SinhVien";
class DanhSachSinhVien extends Component {
  rederSinhVien = () => {
    return this.props.DSSV.map((sv, i) => {
      return <SinhVien sv={sv} key={i} />;
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Quản lý sinh viên</h1>
        <div className="sinhVien">
          <button
            type="button"
            className="btn btn-success my-2"
            data-toggle="modal"
            data-target="#modelId"
          >
            Thêm sinh viên
          </button>
          <Form />
          <table className="table">
            <thead>
              <tr>
                <th>Mã sinh viên</th>
                <th>Họ tên</th>
                <th>Tuổi</th>
                <th>Email</th>
                <th>Hành động</th>
              </tr>
            </thead>
            {this.rederSinhVien()}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    DSSV: state.DSSV,
  };
};

export default connect(mapStateToProps, null)(DanhSachSinhVien);

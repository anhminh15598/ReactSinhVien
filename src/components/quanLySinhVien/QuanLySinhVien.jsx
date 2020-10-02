import React, { Component } from "react";

export default class QuanLySinhVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoTen: "",
      tuoi: "",
      email: "",
      danhSachSinhVien: [],
    };
  }

  handleHoTenChange = (e) => {
    this.setState({
      hoTen: e.target.value,
    });
  };

  handleHoTuoiChange = (e) => {
    this.setState({
      tuoi: e.target.value,
    });
  };

  handleHoEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmitForm = (hoten, tuoi, email) => {
    this.state.danhSachSinhVien.push({
      msv: 2,
      hoTen: hoten,
      tuoi: tuoi,
      email: email,
    });
    this.setState({
      danhSachSinhVien: this.state.danhSachSinhVien,
      hoTen: "",
      tuoi: "",
      email: "",
    });

    console.log(this.state.danhSachSinhVien);
  };

  renderPopup = () => {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Thêm sinh viên
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">MSV</label>
                <input type="text" className="form-control" id="msv" value="" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Họ tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="hoTen"
                  value={this.state.hoTen}
                  onChange={this.handleHoTenChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tuổi</label>
                <input
                  type="text"
                  className="form-control"
                  id="tuoi"
                  value={this.state.tuoi}
                  onChange={this.handleHoTuoiChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleHoEmailChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Hủy
            </button>
            <button
              type="button"
              value="Submit"
              onClick={() => {
                this.handleSubmitForm(
                  this.state.hoTen,
                  this.state.tuoi,
                  this.state.email
                );
              }}
              className="btn btn-primary"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    );
  };

  renderPopupSua = (i) => {
    console.log(this.state.danhSachSinhVien);
    console.log(i);
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel2">
              Sửa sinh viên
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">MSV</label>
                <input type="text" className="form-control" id="msv" value="" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Họ tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="hoTen"
                  value={this.state.danhSachSinhVien[i].msv}
                  onChange={this.handleHoTenChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tuổi</label>
                <input
                  type="text"
                  className="form-control"
                  id="tuoi"
                  value={this.state.danhSachSinhVien[i].tuoi}
                  onChange={this.handleHoTuoiChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={this.state.danhSachSinhVien[i].email}
                  onChange={this.handleHoEmailChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Hủy
            </button>
            <button
              type="button"
              value="Submit"
              onClick={() => {
                this.handleSubmitForm(
                  this.state.hoTen,
                  this.state.tuoi,
                  this.state.email
                );
              }}
              className="btn btn-primary"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Quản Lý Sinh Viên</h1>
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary my-2"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Thêm sinh viên
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            {this.renderPopup()}
          </div>
        </div>

        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>Mã sinh viên</th>
                <th>Họ tên</th>
                <th>Tuổi</th>
                <th>Email</th>
                <th>Hành Động</th>
              </tr>
              {this.state.danhSachSinhVien.map((ds, index) => {
                return (
                  <tr key={index}>
                    <td>{ds.msv}</td>
                    <td>{ds.hoTen}</td>
                    <td>{ds.tuoi}</td>
                    <td>{ds.email}</td>
                    <td>
                      <button>Delete</button>
                      <div>
                        {/* Button trigger modal */}
                        <button
                          type="button"
                          className="btn btn-primary my-2"
                          data-toggle="modal"
                          data-target="#exampleModal-1"
                        >
                          Edit
                        </button>
                        {/* Modal */}
                        <div
                          className="modal fade"
                          id="exampleModal-1"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          {() => {
                            this.renderPopupSua(index);
                          }}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

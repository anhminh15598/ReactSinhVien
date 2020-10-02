import React, { Component } from "react";
import { connect } from "react-redux";

export class FormEdit extends Component {
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    // this.props.onAddSinhVien(this.state);
    this.setState({
      MaSV: "",
      HoTen: "",
      Tuoi: 0,
      Email: "",
    });
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-csontent">
              <div className="modal-header">
                <h5 className="modal-title">Sửa sinh viên</h5>
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
                <form onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label />
                    Mã sinh viên
                    <input
                      type="text"
                      className="form-control"
                      name="MaSV"
                      value={this.props.edit.MaSV}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label />
                    Họ tên
                    <input
                      type="text"
                      className="form-control"
                      name="HoTen"
                      value={this.props.edit.HoTen}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label />
                    Tuổi
                    <input
                      type="text"
                      className="form-control"
                      name="Tuoi"
                      value={this.props.edit.Tuoi}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label />
                    Email
                    <input
                      type="text"
                      className="form-control"
                      name="Email"
                      value={this.props.edit.Email}
                      onChange={this.handleOnChange}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);

import React from "react";
import { connect } from "react-redux";
import {
  actDeleteSinhVien,
  actEditSinhVien,
} from "../../redux/acitons/SinhVien";
import { FormEdit } from "./FormEdit";

const handleDeleteBtn = (maSV, onDeleteSinhVien) => {
  onDeleteSinhVien(maSV);
};
const handleEditBtn = (maSV, sv) => {
  console.log("Mã sinh viên:", maSV);
  console.log("Sinh viên:", sv);
};

const SinhVien = (props) => {
  let { MaSV, HoTen, Tuoi, Email } = props.sv;
  let sv = { MaSV, HoTen, Tuoi, Email };
  let rederFormEdit = () => {
    console.log(sv);
    return (
      <button
        type="button"
        data-toggle="modal"
        data-target="#modelId2"
        className="btn btn-primary m-2"
      >
        Edit
      </button>
    );
  };
  return (
    <tbody>
      <tr>
        <td>{MaSV}</td>
        <td>{HoTen}</td>
        <td>{Tuoi}</td>
        <td>{Email}</td>
        <td>
          <button
            onClick={() => handleDeleteBtn(MaSV, props.onDeleteSinhVien)}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
          {rederFormEdit()}

          {/* <button
            type="button"
            data-toggle="modal"
            data-target="#modelId2"
            className="btn btn-primary m-2"
          >
            Edit
          </button>
          <FormEdit edit={sv} /> */}
        </td>
      </tr>
    </tbody>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteSinhVien: (maSV) => {
      dispatch(actDeleteSinhVien(maSV));
    },
    onEditSinhVien: (maSinhVien) => {
      dispatch(actEditSinhVien(maSinhVien));
    },
  };
};

export default connect(null, mapDispatchToProps)(SinhVien);

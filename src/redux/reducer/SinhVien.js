let DSSV = [];
const SinhVienReducer = (state = DSSV, action) => {
  switch (action.type) {
    case "ADD_USER":
      const user = action.user;
      var updateState = [...state, user];
      return updateState;

    case "DELETE_USER":
      const maSV = action.maSV;
      updateState = [...state];
      const index = updateState.findIndex((e) => e.MaSV === maSV);
      updateState.splice(index, 1);
      return updateState;

    case "EDIT_SINHVIEN":
      const maSinhVien = action.maSinhVien;
      updateState = [...state];
      const i = updateState.findIndex((e) => e.MaSV === maSinhVien);
      return updateState;

    default:
      return [...state];
  }
};
export default SinhVienReducer;

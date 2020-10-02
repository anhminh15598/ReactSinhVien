export const actDeleteSinhVien = (maSV) => ({
  type: "DELETE_USER",
  maSV,
});

export const actAddSinhVien = (user) => ({
  type: "ADD_USER",
  user,
});

export const actEditSinhVien = (maSinhVien) => ({
  type: "EDIT_SINHVIEN",
  maSinhVien,
});

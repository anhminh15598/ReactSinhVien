import SinhVienReducer from "./SinhVien";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  DSSV: SinhVienReducer,
});

export default rootReducer;

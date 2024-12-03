import {
    FuncStoreOpenModalCourse,
    FuncStoreSelectTypeIP,
} from './storeFunc';
// Select theo ip hoặc dải mạng
export const setStoreSelectTypeIP = async (value, dispatch) => await dispatch(FuncStoreSelectTypeIP(value));
export const setOpenModalAddProduct = async (value, dispatch) => await dispatch(FuncStoreOpenModalCourse(value));
import key from "./key"

export const FuncStoreSelectTypeIP = (ret) => {
  return {
    type: key.SELECT_TYPE_IP,
    StoreSelectTypeIP: ret
  }
}
export const FuncStoreOpenModalCourse = (ret) => {
  return {
    type: key.OPEN_MODAL_COURSE,
    StoreOpenModalCourse: ret
  }
}

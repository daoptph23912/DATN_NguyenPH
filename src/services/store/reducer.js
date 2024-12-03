import key from "./key"
const initialState = {
  StoreSelectTypeIP: "",
  StoreOpenModalCourse: false
}

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case key.SELECT_TYPE_IP:
      return { ...state, StoreSelectTypeIP: action.StoreSelectTypeIP }
    case key.OPEN_MODAL_COURSE:
      return { ...state, StoreOpenModalCourse: action.StoreOpenModalCourse }
    default:
      return state
  }
}

export default notesReducer

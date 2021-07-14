import { UserActionTypes } from "./user.type";

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, //return everything that we dont care
                currentUser: action.payload //what we care is here เลยไม่ destructure แบบข้างบน
            }
        default:
            return state;
    }
}

export default userReducer;

//switch case อารม if else เช่น ข้างบน
// check action.type ถ้าเป็น SET_CURRENT_USER จะ return ... ถ้าไม่ก็จะ return default (แค่ state เดิม)
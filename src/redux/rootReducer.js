import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; //use local storage

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // user firebase จัดการให้แล้ว ไม่ต้อง persist เอง
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);



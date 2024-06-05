import { configureStore, combineReducers } from "@reduxjs/toolkit";
import expoSlice from "../redux/ExpoSlice"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 

const rootReducer = combineReducers({
    expo: expoSlice,
});

const persistConfig = {
    key: 'root',
    storage,
}

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = configureStore({
    reducer: persistedReducer,
});


const persistor = persistStore(store);

export { store, persistor };
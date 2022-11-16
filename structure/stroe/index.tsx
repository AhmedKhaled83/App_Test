import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Dark_Slice from "./DarkSlice";
import language_slice from "./Langaues";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    Dark: Dark_Slice,
    Langauge:language_slice
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Dark','Langauge']
};

const persistedReducer = persistReducer(persistConfig, reducers);



const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Reducers";

import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "../utils/apiSlice";

const persistConfig = {
	key: "momoHack01",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, myReducer);

export const store = configureStore({
	reducer: {
		persistedReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(api.middleware),
});

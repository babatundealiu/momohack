import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Index from "./routes/AllRoutes.tsx";
import GlobalStyle from "./assets/GlobalStyles.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./services/Store.tsx";
import Loader from "./components/commons/Loader.tsx";
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={persistor}>
				<GlobalStyle />
				<ToastContainer />
				<RouterProvider router={Index} />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);

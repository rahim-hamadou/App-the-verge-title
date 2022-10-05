import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import bookmarks from "../reducers/bookmarks";
import user from "../reducers/user";
import hiddenArticle from "../reducers/hiddenArticles";

// import lié au persist storage
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "@reduxjs/toolkit";

// definir les reducers
const reducers = combineReducers({ bookmarks, user, hiddenArticle });

// utiliser clé pour identifier le nom des data dans le localStorage
const persistConfig = { key: "morningnews", storage };

// maj du contenu store
const store = configureStore({
	reducer: persistReducer(persistConfig, reducers),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// Transformez votre store pour qu’il soit persistant :
const persistor = persistStore(store);

function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Head>
					<title>Morning News</title>
				</Head>
				<Header />
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

export default App;

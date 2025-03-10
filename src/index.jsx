import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

import App from "./components/App";

// Хранилище
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        {/* Оборачиваем компонент App в Provider для глобального доступа */}
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

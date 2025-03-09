import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

import App from "./components/App";

// Хранилище
const store = createStore(reducer);

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

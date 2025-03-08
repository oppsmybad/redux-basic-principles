import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

// Логика Редюсера
const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1,
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1,
            };
        case "RND":
            return {
                ...state,
                value: state.value * action.payload,
            };
        default:
            return state;
    }
};

// Хранилище
const store = createStore(reducer);

const update = () => {
    document.getElementById("counter").textContent = store.getState().value; // записываем значения внутрь счетчика
};

// Вызываем функцию update
store.subscribe(update);

// action для INC
const inc = () => ({
    type: "INC",
});

// action для DEC
const dec = () => ({
    type: "DEC",
});

// action для RND
const rnd = (value) => ({
    type: "RND",
    payload: value,
});

document.getElementById("inc").addEventListener("click", () => {
    // используем action inc
    store.dispatch(inc()); // +1
});

document.getElementById("dec").addEventListener("click", () => {
    // используем action dec
    store.dispatch(dec()); // -1
});

document.getElementById("rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10);
    // используем action rnd
    store.dispatch(rnd(value)); // random number
});

// ''

// Вывод в консоль
// let state = reducer(undefined, { type: "INC" }); // 1
// state = reducer(state, { type: "INC" });
// state = reducer(state, { type: "INC" });
// state = reducer(state, { type: "INC" });
// console.log(state); // 4

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode></StrictMode>);

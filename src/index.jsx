import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

// Хранилище
const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById("counter").textContent = getState().value; // записываем значения внутрь счетчика
};

// Вызываем функцию update
subscribe(update);

// Создаем общую функция для привязки actions с аргументами
// const bindActionCreator =
//     (creator, dispatch) =>
//     (...args) => {
//         dispatch(creator(...args));
//     };

// Передаем каждый action в виде ключей и привязываем к bindActionCreators
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById("inc").addEventListener("click", inc); // +1

document.getElementById("dec").addEventListener("click", dec); // -1

document.getElementById("rnd").addEventListener("click", () => {
    const value = Math.floor(Math.random() * 10);
    rnd(value); // random number
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

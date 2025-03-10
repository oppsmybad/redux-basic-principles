import { connect } from "react-redux";
import { inc, dec, rnd } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    // Используем хук useSelector вытаскиваем значение counter (0)
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        // Возвращаем верстку через return
        <div
            className="jumbotron"
            style={{
                textAlign: "center",
                marginTop: "50px",
            }}
        >
            <h1 id="counter">{counter}</h1>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">
                INC
            </button>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">
                DEC
            </button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">
                RND
            </button>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value, // 0
//     };
// };

// // Возвращаем привязанные actions
// // const mapDispatchToProps = (dispatch) => {
// //     return bindActionCreators(actions, dispatch);
// // };

// // Привязываем mapStateToProps и mapDispatchToProps на Counter
// export default connect(mapStateToProps, actions)(Counter);

export default Counter;

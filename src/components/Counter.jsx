import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
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
            <button onClick={inc} className="btn btn-primary">
                INC
            </button>
            <button onClick={dec} className="btn btn-primary">
                DEC
            </button>
            <button onClick={rnd} className="btn btn-primary">
                RND
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.value, // 0
    };
};

// Возвращаем привязанные actions
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// };

// Привязываем mapStateToProps и mapDispatchToProps на Counter
export default connect(mapStateToProps, actions)(Counter);

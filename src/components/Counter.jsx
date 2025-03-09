const Counter = ({ counter, inc, dec, rnd }) => {
    <div className="jumbotron" style="text-align: center; margin-top: 50px">
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
    </div>;
};

export default Counter;

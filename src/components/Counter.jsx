import "./counter.css";

function Counter({ label, name, value, onChange }) {
    return (
        <div className="counter">
            <span className="counter-label">{label}</span>

            <div className="counter-controls">
                <button
                    type="button"
                    name={name}
                    value={-1}
                    onClick={onChange}
                    disabled={value === 0}
                    className="counter-button"
                >
                    −
                </button>

                <span className="counter-value">{value}</span>

                <button
                    type="button"
                    name={name}
                    value={1}
                    onClick={onChange}
                    className="counter-button"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;
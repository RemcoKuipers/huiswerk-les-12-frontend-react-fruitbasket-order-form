function Counter({label, name, value, onChange}) {
    return (
        <article>
            <h2>{label}</h2>
            <button
                type="button"
                name={name}
                value={-1}
                onClick={onChange}
                disabled={value === 0}>-
            </button>
            <p>{value}</p>
            <button
                type="button"
                name={name}
                value={1}
                onClick={onChange}>+
            </button>
        </article>
    );
}

export default Counter;
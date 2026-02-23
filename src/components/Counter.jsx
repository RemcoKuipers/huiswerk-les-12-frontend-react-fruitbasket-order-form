function Counter({label, value, onIncrease, onDecrease}) {
    return (
        <article>
            <h2>{label}</h2>
            <button type="button" onClick={onDecrease} disabled={value === 0}>-</button>
            <p>{value}</p>
            <button type="button" onClick={onIncrease}>+</button>
        </article>
    );
}

export default Counter;
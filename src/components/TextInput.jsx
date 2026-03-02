import "./textinput.css";

function TextInput({ label, name, register, rules, error, type = "text" }) {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>

            <input
                id={name}
                type={type}
                className={`form-input ${error ? "input-error" : ""}`}
                {...register(name, rules)}
            />

            {error && (
                <p className="error-message">
                    {error.message}
                </p>
            )}
        </div>
    );
}

export default TextInput;
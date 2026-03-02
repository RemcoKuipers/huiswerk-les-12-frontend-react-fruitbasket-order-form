import "./radiogroup.css";

function RadioGroup({ label, name, options, register, rules, error }) {
    return (
        <div className="radio-group">
            <p className="radio-label">{label}</p>

            <div className="radio-options">
                {options.map((option) => (
                    <label key={option} className="radio-option">
                        <input
                            type="radio"
                            value={option}
                            {...register(name, rules)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>

            {error && (
                <p className="error-message">
                    {error.message}
                </p>
            )}
        </div>
    );
}

export default RadioGroup;
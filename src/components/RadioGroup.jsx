function RadioGroup({label, name, options, register, error, rules}) {
    return (
        <>
            <p>{label}</p>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        {...register(name, rules)}
                    />
                    {option}
                </label>
            ))}
            {error && <p>{error.message}</p>}
        </>
    );
}

export default RadioGroup;
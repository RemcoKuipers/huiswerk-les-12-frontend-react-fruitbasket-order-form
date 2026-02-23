function CheckboxInput({label, name, register, error, rules}) {
    return (
        <label>
            <input type='checkbox' {...register(name, rules)}/>
            {label}
            {error && <p>{error.message}</p>}
        </label>
    );
}

export default CheckboxInput;
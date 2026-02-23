function TextInput({label, name, type = "test", register, error, rules}) {
    return (
        <label>
            {label}
            <input type={type} {...register(name, rules)}/>
            {error && <p>{error.message}</p>}
        </label>
    );
}

export default TextInput;
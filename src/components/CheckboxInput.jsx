import './checkboxinput.css'

// eslint-disable-next-line react/prop-types
function CheckboxInput({label, name, register, error, rules}) {
    return (
        <div className="checkbox-group">
            <div className="checkbox-wrapper">


                <input className="checkbox-input" type='checkbox' {...register(name, rules)}/>
                <label htmlFor={name} className="checkbox-label">
                    {label}
                </label>
            </div>


            {
                error && <p>{error.message}</p>
            }


        </div>
    )
        ;
}

export default CheckboxInput;
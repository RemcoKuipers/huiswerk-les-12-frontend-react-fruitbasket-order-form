import './button.css'

// eslint-disable-next-line react/prop-types
function Button({type = "button", onClick, children, disabled}) {
    return (
        <button className={`button ${type === "submit" ? "button-primary" : "button-secondary"}`}  type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
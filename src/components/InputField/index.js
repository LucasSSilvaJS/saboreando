import './input-field.css';

function InputField({label, children, withoutMargin = false}) {
    return ( 
        <div className="input-field" style={{'marginTop': withoutMargin && '0px'}}>
            <label>
                {label}
            </label>
            {children}
        </div>
     );
}

export default InputField;
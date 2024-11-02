import './input-text.css';

function InputText({action, value, placeholder, required = true, type = 'text'}) {
    return ( 
        <input className='input-text' required={required} type={type} placeholder={placeholder} onChange={action} value={value}/>
     );
}

export default InputText;
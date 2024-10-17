import './input-text.css';

function InputText({action, value, placeholder, required = true}) {
    return ( 
        <input className='input-text' required={required} type="text" placeholder={placeholder} onChange={action} value={value}/>
     );
}

export default InputText;
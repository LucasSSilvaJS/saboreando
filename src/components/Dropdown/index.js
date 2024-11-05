//options recebe um array de valores
//value é um indice

import './dropdown.css';

function Dropdown({options, placeholder, value, onChange, required = false}) {
    return ( 
        <select className='dropdown' value={value} onChange={e => onChange(e.target.value)} required={required}>
            <option value="" disabled hidden>{placeholder}</option>
            {options.map((option, index) => {
                return(
                    <option value={option} key={index}>{option}</option>
                )
            })}
        </select>
     );
}

export default Dropdown;
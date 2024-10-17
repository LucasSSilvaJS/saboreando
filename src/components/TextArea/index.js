import './text-area.css';

function TextArea({value, placeholder, action}) {
    return ( 
        <textarea className="text-area" value={value} placeholder={placeholder} onChange={action}></textarea>
     );
}

export default TextArea;
import './stamp.css';

function Stamp({text}) {
    return ( 
        <article className='stamp'>
            <div className="stamp-circle"></div>
            <h3>{text}</h3>
        </article>
     );
}

export default Stamp;
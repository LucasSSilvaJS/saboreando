import './category-resume.css';

function CategoryResume({img, title, desc}) {
    return ( 
        <div className="category-resume" style={{'backgroundImage': `url(${img})`, 'backdropFilter': 'brightness(60%)'}}>
            <div className='resume-content'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
     );
}

export default CategoryResume;
import { useRef, useState } from 'react';
import './presentation.css'

function Presentation() {
    const [position, setPosition] = useState(0);
    const [animation, setAnimation] = useState(true);

    const containerBtn = useRef(null);
    
    function next(value, element){
        setAnimation(false);
        setPosition(value);

        if(containerBtn.current){
            Array.from(containerBtn.current.children).forEach(btn => {
                btn.style.backgroundColor = 'white';
            });
        }

        element.style.backgroundColor = 'black';

    }

    return ( 
        <section className="presentation">
            <div 
                className="presentation-texts" 
                style={animation ? {'animation': 'nextText 8s infinite alternate forwards'} : {'transition': '1s all', 'transform' : `translateX(${position}%)`}}
            >
                <p>Explore grandes variedades de sabores recheados de história</p>
                <p>Um jeito diferente de experimentar a gastronomia</p>
                <p>O melhor da nossa cultura e gastronomia na palma da sua mão</p>
                <p>Culinárias diversas para o seu paladar</p>
            </div>
            <div className="presentation-buttons" ref={containerBtn}>
                <button 
                    onClick={(e) => next(0, e.target)}
                ></button>
                <button 
                    onClick={(e) => next(-100, e.target)}
                ></button>
                <button 
                    onClick={(e) => next(-200, e.target)}
                ></button>
                <button 
                    onClick={(e) => next(-300, e.target)}
                ></button>
            </div>
        </section>
     );
}

export default Presentation;
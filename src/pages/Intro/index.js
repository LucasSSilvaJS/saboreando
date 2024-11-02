import { useNavigate } from 'react-router-dom';
import Brand from '../../components/Brand';
import DevelopmentTeam from '../../components/DevelopmentTeam';
import './intro.css'
import { useEffect } from 'react';

function Intro() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout( () => navigate('/inicio'), 5000);
    }, [navigate])

    return ( 
        <div className='container-intro'>
            <Brand/>
            <DevelopmentTeam/>
        </div>
     );
}

export default Intro;
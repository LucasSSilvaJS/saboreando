import Brand from '../../components/Brand';
import ButtonSand from '../../components/ButtonSand';
import Presentation from '../../components/Presentation';

function Inicio() {
    return ( 
        <div className="container-bg-red default-container">
            <Brand disableAbsolute={true}/>
            <Presentation/>
            <main className='container'>
                <div style={{'paddingTop' : '20px'}}>
                    <ButtonSand text='Quero me cadastrar' to='/cadastro'/>
                </div>
                <div style={{'padding' : '20px 0'}}>
                    <ButtonSand text='Já sou cadastrado' to='/login'/>
                </div>
            </main>
        </div>
     );
}

export default Inicio;
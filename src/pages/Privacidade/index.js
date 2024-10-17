import Header from "../../components/Header";

import './privacidade.css';

function Privacidade() {
    return ( 
        <div className="default-container container-bg">
            <Header navigation={true} ableCap={false} text='Politica de privacidade e uso' to='/perfil' />
            <main className="container privacidade">
                <p>Enim quis irure reprehenderit reprehenderit in veniam irure ad et laboris occaecat minim magna ipsum. Aliqua consectetur ullamco ex fugiat elit enim ipsum. Anim minim sit consectetur occaecat fugiat est consectetur voluptate aliqua. Qui aute dolore adipisicing duis deserunt ad magna aliqua. Velit commodo reprehenderit consectetur officia minim et et nostrud culpa tempor.</p>
            </main>
        </div>
     );
}

export default Privacidade;
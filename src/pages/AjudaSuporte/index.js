import { Link } from "react-router-dom";
import Header from "../../components/Header";

import './ajuda-suporte.css';

function AjudaSuporte() {
    return ( 
        <div className="default-container container-bg">
            <Header ableCap={false} navigation={true} text='Ajuda e Suporte' to='/perfil'/>
            <main className="container suport-options">
                <Link className="suport-option" to='/ticket'>
                    <h2>Enviar um ticket</h2>
                    <span>Está com dúvida em algo? nós podemos te ajudar!</span>
                </Link>
                <Link className="suport-option" to='/bug'>
                    <h2>Reportar bug</h2>
                    <span>Se encontrou algum problema, pode nos avisar!</span>
                </Link>
            </main>
        </div>
     );
}

export default AjudaSuporte;
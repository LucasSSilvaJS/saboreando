import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";

function Public({children}) {
    const [signIn, setSignIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function verifyLogin(){
            await onAuthStateChanged(auth, user => {
                if(user){
                    setSignIn(true);
                }else{
                    setSignIn(false)
                }
                setLoading(false)
            });
        }

        verifyLogin();
    }, []);

    if(loading){
        return <div></div>
    }

    if(signIn){
        return <Navigate to='/home'/>
    }

    return children
}

export default Public;
import React, { useState } from 'react'         // Hook useState
import { useHistory } from 'react-router-dom'   // Hook useHistory
import { FooterComponent } from '../../components/footercomponent/FooterComponent'
import './LoginView.css'


export const LoginView = () => {
    const [ loginemail, setLoginEmail ] = useState("msdata1010@gmail.com");  // Deklarera loginEmail
    const [ loginpassword, setLoginPassword ] = useState("Tennis123");       // Deklararera loginPassword
    const history = useHistory();

    const login = () => {
        alert(loginemail + " " + loginpassword + " har loggat in ");
        history.push("/");
    }

    localStorage.setItem(loginemail, setLoginEmail);
    localStorage.setItem(loginpassword, setLoginPassword);
    


    return (
        <div className="loggaInContainer">
            <span>Användarnamn (E-post):</span><br /><input type="text" onChange={ event => setLoginEmail(event.target.value)} /><br />
            <span>Lösenord:</span><br /><input type="password" onChange={ event => setLoginPassword(event.target.value)} /><br /><br />
            <button onClick={ () => login()} >Logga in:</button><br />
            <div className="footer">
                < FooterComponent />
            </div>
        </div>
    );
}

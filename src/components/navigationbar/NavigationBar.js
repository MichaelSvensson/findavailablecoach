import React from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/Logo.png'
import { useHistory } from 'react-router-dom'

export const NavigationBar = () => {
    const history = useHistory();   /* Deklarera varibeln history */

    return (
        <div className="navigationBarWrapper" >
            <img onClick={() => history.push('/')}  /* Navigera till homeview */
            className="logos" 
            src={Logotype} 
            alt="Logo" />
            <span onClick={() => history.push('/about')} className="om">Om_Oss</span>
            <span onClick={() => history.push('/contact')} className="kontakt">Kontakt</span>
            <span onClick={() => history.push('/login')} className="loggain">Logga_in</span>
        </div>
    );
}
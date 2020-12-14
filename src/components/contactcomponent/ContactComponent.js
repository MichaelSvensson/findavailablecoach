import React from 'react';
import "./ContactComponent.css";
import imgContact from '../../shared/images/Michael.jpg';

export const ContactComponent = () => {
    return (
        <div className="container">
                <img className="imgContact" 
                 src={imgContact}
                alt="Kontaktbild" />
            <div className="contact-detail">
                <h4>Michael Svensson<br />
                    Mobil: 072-164 59 59<br />
                    E-post: msdata1010@gmail.com</h4>
            </div>
        </div>
    )
}

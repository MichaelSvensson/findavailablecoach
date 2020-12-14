import React from "react";
import "./ContactView.css";
import { ContactComponent } from '../../components/contactcomponent/ContactComponent';
import { FooterComponent } from '../../components/footercomponent/FooterComponent';

export const ContactView = () => {
  return (
    <div className="contactContainer">
      < ContactComponent />
      < FooterComponent />
    </div>
  );
};

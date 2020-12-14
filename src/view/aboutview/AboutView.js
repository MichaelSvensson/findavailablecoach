import React from 'react'
import { AboutComponent } from "../../components/aboutcomponent/AboutComponent"
import { FooterComponent } from "../../components/footercomponent/FooterComponent"
import './AboutView.css'

export const AboutView = () => {
    return (
        <div className="aboutContainer"> 
            < AboutComponent />
            < FooterComponent />
        </div>
    );
}
import React from "react";
import { HomeStartComponent } from "../../components/homestartcomponent/HomeStartComponent";
import { FooterComponent } from "../../components/footercomponent/FooterComponent";
import "./HomeView.css";

export const HomeView = () => {
  return (
    <div className="homeContainer">
      < HomeStartComponent />
      < FooterComponent />
    </div>
  );
}

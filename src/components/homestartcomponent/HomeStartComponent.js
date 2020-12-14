import React from "react";
// Import av stilmall
import "./HomeStartComponent.css";
// För att kunna använda komponenten i andra filer måste den exporteras...
export const HomeStartComponent = () => {
  return (
    <div className="container">
      <h2 className="title">Välkommen!</h2>
      <h4 className="bread1">Hej alla tennisföreningar och tenniscoacher!</h4>
      <h4 className="bread2">
        Ni har säkert många gånger haft problem att skaffa<br />en ersättare/vikarie till era lektioner/kurser.
      </h4>
      <div id="syfte">
        <h4>Syftet med denna tjänst är att ni ska kunna registrera er som coach och därigenom bli sökbara för andra coacher/ föreningar
        som har lediga tjänster/vikariat eller som snabbt behöver få tag på en lämplig tränare.</h4>
      </div>  
      <br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

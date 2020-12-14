import React from "react";
// Import av stilmall
import "./AboutComponent.css";
// För att kunna använda komponenten i andra filer måste den exporteras...
export const AboutComponent = () => {
  return (
    <div className="container">
      <h2 className="title">Om oss</h2>
      <h4 className="bread1">
        Vi som utvecklar denna tjänst har mycket stor erfarenhet av att arbeta som coacher och 
        efter över 40-års erfarenhet med ständiga problem att snabbt hitta passande vikarier
        till olika nivåer av elever har vi nu börjat utveckla denna tjänst.
      </h4>
      <h4 className="bread1">
        För att kunna använda denna tjänst måste ni först
        registrera er genom att skapa ett konto.<br /><br />
        Vid registreringen ska följande saker anges:<br /><br />
        Namn<br /><br />
        Ålder<br /><br />
        Kön<br /><br />
        Mobil<br /><br />
        Språk<br />
        Svenska/Engelska<br /><br />
        Spelarerfarenhet<br />
        Tävlingsspelare | Motionär<br /><br />
        Nivå som tävlingsspelare<br />
        Nybörjare | Medel | Avancerad | Elit<br /><br />
        Erfarenhet i antal år.<br /><br />
        Vilka kurser ni har gått.<br /> Tennisens
        plattform<br />Steg1/Steg2/Steg3<br />
        /TGU1/TGU2/TGU3/<br /><br />
        Vilken typ/nivå av elever som ni känner att ni behärskar kunna ta.<br /><br />
        Vilka/vilka län/orter ni önskar ni är tillgängliga att arbeta i<br /><br />
        Egna kommentarer: Här kan ni ange egna önskemål när ni helst kan arbeta.<br /><br />
      </h4>
    </div>
  );
}

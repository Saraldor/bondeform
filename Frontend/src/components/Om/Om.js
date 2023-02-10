import React, { useState, useEffect } from "react";
import profil from "../../img/assets/profil.jpg";
import "./om.css";
const Om = () => {


  return (
    <div className="container mt-1">
   <div className="box">
      <div className="columns">
        
          <div className="column is-half">
             <div className="box">
              <div className="centerImg">
             <img className="img" alt ="profil"src={profil} width="60%" />
             </div>
             </div>
             </div>
             <div className="column">
              <div className="box">

Bondeform är ett litet nystartat företag som drivs av mig Therése Bondesson. Jag har min gårdsateljé i Ronneby som ligger mitt i Blekinge. Där andas jag, lever och bygger. Jag strävar alltid efter att vara i nuet med varje lerklump och älskar att följa processen, därför blir alla mina produkter sin egen och alla är olika, precis som vi människor.
<p/>
Bondeform föddes mitt i den tuffa pandemitiden. Då fick jag andrum och sakteliga kom kreativiteten och lusten tillbaka. En svår tid på många sätt men för mig blev det pånyttfödelse. Mina former byggs med inspiration från stunder och händelser i livet, flera av dem ha en egen dikt.
<p/>
Hållbarhet för mig är att göra inköp med hjärtat. Att omge sig med ting som betyder något speciellt och på så vis vill man inte byta ut dem.
<p/>
<strong>Bondeform står på två ben</strong>
<br/>Egen produktion 
<br/>Uppdrags produktion – specialbyggda lampfötter kopplat till ett tema och/eller en miljö
<br/>
<strong>Kontakt:</strong>
<br/>
Tfn: 070-2343190
<br/>
info@bondeform.se
<br/>
<a href="https://www.bondeform.se">www.bondeform.se</a>
</div>
          <p/></div>
       </div>         
       </div>

</div>
       
    
  );
};

export default Om;

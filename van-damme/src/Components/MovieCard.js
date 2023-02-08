import React from 'react';
import ddd from './images/ddd.jpg';
import './card.css';
import fff from './images/fff.jpg';
import R from './images/R.jpg'



function Card ({Title}) {




return(

        <div className="card-container">


<div className="image-container">


<img src={ddd}alt=""/> 
<h3>{Title}FasteR</h3> 
<div className="card-body">
        <p>*** Évaluation du contenu: R
*** Directeur: George Tillman Jr.
*** Auteur: Tony Gayton, Joe Gayton
*** Étoiles: Dwayne Johnson, Billy Bob Thornton, Maggie Grace
*** Genre: Action, Crime, Drama</p>
        </div>

        <button>
                
                Watch Me
                
                
        </button>


        





<img src={fff}alt=""/>   
        </div>
        <div className="card-Title">
        <h3>{Title}Fast And FuriouS 6</h3>
        </div>
        <div className="card-body">
        <p>*** Évaluation du contenu: PG-13
  *** Directeur: Justin Lin
*** Auteur: Chris Morgan, Gary Scott Thompson
*** Étoiles: Vin Diesel, Paul Walker, Dwayne Johnson
*** Genre: Action, Crime, Thriller</p>
        </div>
<div className="btn">
        <button>
        Watch Me 
                
                
        </button>
        </div>

        

        <img src={R}alt=""/>

        <h3>{Title}Before WE GO</h3>
        <div className="card-body">
        <p>*** Évaluation du contenu: PG-13
              *** Directeur: Chris Evans
                *** Auteur: Ron Bass, Jen Smolka, Chris Shafer
     *** Étoiles: Chris Evans, Alice Eve, Emma Fitzpatrick
      ***  Genre: Comedy, Drama, Romance</p></div>
        <button>
Watch Me
                
        
        </button>
        

        
</div>



)



}

export default Card ;
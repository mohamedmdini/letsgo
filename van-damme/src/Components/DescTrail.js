import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'
import faster from './images/faster.jpg';
import loo from './images/loo.jpg';
import R from './images/R.jpg';
import './card.css';





const StarRating = () => {
    const [rating, setRating  ] = useState(null)
    const [hover, setHover ] = useState(null)





    return(
    
        <div>
    
<h1> Title : FasteR </h1>
        <p>DESCRIPTION : An ex-con gets on a series of apparently unrelated killings. He gets tracked by a veteran cop with secrets of his own and an egocentric hit man.</p>

        <p> Poster Url : https://w123moviesfree.net/movie/faster </p>
            <img src={faster} alt=""/>



        {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1 ; 
return(
    <label>
    <input 
    type="radio"
    name="rating"
    Value={ratingValue}
    onClick={()=> setRating (ratingValue)}
    />
<FaStar 
className="star"
color={ ratingValue <=  ( hover || rating ) ? "#ffc107" : "e4e5e9"}
size={70}
onMouseEnter={() => setHover(ratingValue)}
onMouseLeave={()=> setHover(null)}

/> 



</label>
);
            
        })}

<h1> Title : Fast And FuriouS 6</h1>
        <p> DESCRIPTION : Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.</p> 
        
        <p>Poster Url : https://ww22.123movies.ski/movie/fast-and-furious-6-52977   </p>
        <img src={loo} alt=""/>


        {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1 ; 
return(
    <label>
    <input 
    type="radio"
    name="rating"
    Value={ratingValue}
    onClick={()=> setRating (ratingValue)}
    />
<FaStar 
className="star"
color={ ratingValue <=  ( hover || rating ) ? "#ffc107" : "e4e5e9"}
size={70}
onMouseEnter={() => setHover(ratingValue)}
onMouseLeave={()=> setHover(null)}

/> 



</label>
);
            
        })}
<h1> Title : Before We Go </h1>
        <p> DESCRIPTION : Two strangers stuck in Manhattan for the night grow into each other's most trusted confidants when an evening of unexpected adventure forces them to confront their fears and take control of their lives.</p>
        
        <p>Poster Url : https://test.gomoviess.cyou/movie/before-we-go</p>
        
        <img src={R} alt=""/>
        {[...Array(5)].map((star, i)=>{
            const ratingValue = i + 1 ; 
return(
    <label>
    <input 
    type="radio"
    name="rating"
    Value={ratingValue}
    onClick={()=> setRating (ratingValue)}
    />
<FaStar 
className="star"
color={ ratingValue <=  ( hover || rating ) ? "#ffc107" : "e4e5e9"}
size={70}
onMouseEnter={() => setHover(ratingValue)}
onMouseLeave={()=> setHover(null)}

/> 



</label>
);
            
        })}





        </div>
    )


    }

export default StarRating

import "./AnimalShow.css";

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

import { useState } from 'react';

// crete an object
const svgMap = {
    // bird: bird,  //this is key value pair object below is also same 
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}



function AnimalShow({type}){
    const [clicks, setClick] = useState(0);

    const handleClick =()=>{
        if (clicks === 5){
            setClick(0)
        }else{
            setClick(clicks+1)
        }
        
    }
    return(
        <div className="animal-show" onClick={handleClick}>
            <ul>
                {/* just name from App file */}
                {/* <li>{type}</li> */}

                <li>
                    <img className="animal" src={svgMap[type]} alt={type}/>
                    <img className="heart" src={heart} alt={heart} 
                        style={{width : 10+10*clicks + 'px'}}/>
                    
                </li>

            </ul>
        </div>
        
    );
    
}
export default AnimalShow;
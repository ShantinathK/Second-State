import { useState } from "react";
//un comment if required
// import "../node_modules/bulma/css/bulma.css";

function AnimalShowExtra(){
    //without using state == in this way you cannot call any variable in JSX but using state we can - because of props method.
    // let count = 0;
    const [count, setCount] = useState(0);
    const handleClick = ()=> {
        // count = count+1;
        setCount(count+1);
        const a = document.getElementById("animal");
        const b = document.createElement("h1");
        // b.innerHTML = "you clicked me = " + count;
        b.innerHTML = "you clicked me = " + (count+1);
        a.appendChild(b);
        if(count > 9){
            b.remove();
        }
        
    }
    return (
    <div id="animal">
        <h2>Cow!!</h2>
        <button className="button is-primary"
                onClick={handleClick} >Click me!</button>
        <h1>Number of times clicked = {count}</h1>
        {/* <h1 onMouseMove={handleClick}>hello there</h1> */}
    </div>
    
    );
}
export default AnimalShowExtra;
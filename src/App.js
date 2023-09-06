import "./App.css"

// import AnimalShowExtra from "./AnimalShowExtra";
import AnimalShow from "./AnimalShow";

import { useState } from "react";

function App(){
  

  function getRandomAnimal(){
      const animaln = ['horse', 'cat', 'gator', 'cow','dog','bird'];
      let a = Math.random();
      let i;
      i = Math.floor(a * animaln.length);
      return animaln[i];
        // return animaln[Math.floor(Math.random() * animals.length)];
      
      
  }
  // console.log(getRandomAnimal());
  // using map function to create new array to display in proper way with correct index
  // const renderAnimals 
  const [animals,  setAnimals] = useState([]);

  const addAnimal= ()=>{
      // modifies the State
      // animals.push(getRandomAnimal());
      // give one value in array
      // setAnimals([getRandomAnimal()]);
      setAnimals([...animals, getRandomAnimal()]);
      
  };

  const renderAnimals = animals.map((animal, index) =>{
      return <AnimalShow type={animal} key={index} />;
      
  });
  
  

  return(
  <div className="app">
    <h1>Show animal list</h1>
    <div>
      <button   className="button"  onClick={addAnimal}>Add Animals</button>
      <hr />
      {/* <div>{animals}</div> */}
    </div>
    <ol type="A" className="animal-list">
      <li>Animal List</li>{renderAnimals}
      {/* <AnimalShow type={animals}/> */}
      {/* <li><AnimalShowExtra /></li> */}
      
    </ol>
    
  </div>);
}

export default App;
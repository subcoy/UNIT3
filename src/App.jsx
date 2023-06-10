import { useState } from 'react';
import {puppyList} from '../src/data.js';
import './data.css'


function App() {
 // const [count, setCount] = useState(0)
 
 const [puppies, setPuppies] = useState(puppyList);
 const [featPupId, setFeatPupId] = useState(null);

 //console.log("my puppies=", puppies);

  /*function handleClick() 
  {
    // some logic here
  }*/
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log("featuredPup=",featuredPup);
   return (
       
           
    <div className='div1' >
       <h1> Puppy Pals</h1>
        {featPupId && (
        <div className='div2'>          
            <h2>{featuredPup.name}</h2>

            <div className='image'>
              <img src={featuredPup.Image} ></img>
           </div>
              <ul>
                  <li>Age: {featuredPup.age}</li>
                  <li>Email: {featuredPup.email}</li>
                  <li>Tricks: 
                    <ul>
                      {featuredPup.tricks.map(trick =>
                      <li key={trick}>{trick.title}</li>
                    )}
                    </ul>  
                  </li>
              </ul>

        </div>
        
      )}
      {puppies.map((puppy) => {
                                return (

                                 /* <p onClick={()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>
                                  Puppy name={puppy.name}, 
                                  Id= {puppy.id}
                                  {console.log("puppy id: ", puppy.id)}
                                </p> */

                                  <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id} className='image-button'>
                                    Puppy name: {puppy.name}
                                    
                                    {console.log("puppy id: ", puppy.id)}
                                  </p> 
                                  
                                                                   
                                );
                              }
                    )
       }
    </div>
  );
            }
export default App

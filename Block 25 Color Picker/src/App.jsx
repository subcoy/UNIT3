import { useState } from 'react'
import './App.css'

const Color= ({color, setActiveColor, colorClassName})=>
{

return(
  <div
    className={`${color === colorClassName ? 'selected' : null} ${color}`}
    onClick={()=> setActiveColor(color)}
    >
  </div>
)
}


const App = () => {
  const colors = ['red', 'blue', 'green']
  const [activeColor, setActiveColor] = useState('');
console.log(activeColor)
  return (
    
    <div id="container">

      <div id="navbar">
        <div>Currently selected: </div>
        <div className={activeColor}>{activeColor}</div>
      </div>

      <div id="colors-list">
        {colors.map((color, key) => <Color key= {key} colorClassName={activeColor} color={color} setActiveColor={setActiveColor}/>)}
      </div>

    </div>
  );
};



export default App

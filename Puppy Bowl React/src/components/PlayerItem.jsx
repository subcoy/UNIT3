import './PlayerItem.css'
import React from 'react';

export const PlayerItem = (props) => {
    const handleinfo =() =>{
    console.log('Aqui')
    


    }
    return (
        <li className='player-profile'>
            <h4 >Name: {props.player.name}</h4>
            <p>Breed: {props.player.breed}</p>
            <img src={`${props.player.imageUrl}`}/>
            <button className='button' onClick={handleinfo}>Info</button>
   
        </li>
    )
}

export default PlayerItem;

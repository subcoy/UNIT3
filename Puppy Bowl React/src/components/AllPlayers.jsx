import React, { useEffect, useState } from 'react';
import {PlayerItem} from './PlayerItem';

const cohortName = '2023-acc-et-pt-c';
const  APIURL=`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`

export const AllPlayers = () => {
    const[players, setPlayers] =useState([]);
    useEffect(() =>{
        const getAllPlayers = async () =>{
            const  response =await fetch(APIURL);
            const hydratedResponse =await response.json();
            console.log('hydrated Response:',hydratedResponse);
            const playerData= hydratedResponse.data.players
            console.log(players);
            setPlayers(playerData);

        }
       getAllPlayers();
    },[]);

    return (
        <ul>
            {players.map((player)=>{
                return <PlayerItem player={player} key={player.id}/>

            })}
        </ul>
    );
}
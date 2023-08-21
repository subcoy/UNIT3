import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ token }) => {

    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = async () => {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })


            const respuesta = await response.json()
            console.log(respuesta)
            if (respuesta) setSuccessMessage(respuesta.message)
        } catch (err) {

            setError(err.message)
        }
    }
    return (
     
        <div className='plate'>
            <h2 >Authenticate </h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Here after submit</button>
        </div>
    );
}

export default Auth;
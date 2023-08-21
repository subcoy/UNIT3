import React, { useState } from 'react';
import './Form.css'

const Form = ({ setToken, token }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })
            const respuesta = await response.json()
            console.log(respuesta)
            if (respuesta) {
                setToken(respuesta.token)
                setUsername('')
                setPassword('')
            }
        } catch (err) {
            setError(err.message)
            console.log(err)
        }
    }
    return (
        <>
            {token ?
                <p className='logged-in'> Congratulations You're in</p>
                :
                <div className="container">
                    <h2>Sign up</h2>
                    {error && <p>{error}</p>}
                    <form onSubmit={handleSubmit} className="form">
                        <div className="inputs">
                            <label htmlFor="name">
                                Name: <input type="text" id="name" value={username} minLength={3} required onChange={(e) => setUsername(e.target.value)} />
                            </label>
                            <label htmlFor="password">
                                Password: <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={3}></input>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="btn-submit">Submit</button>
                        </div>
                    </form>
                </div>
            }
        </>

    );
}

export default Form;
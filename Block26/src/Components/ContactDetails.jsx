import { useState } from 'react'
import ContactList from './ContactList'





const ContactDetails = ({ details,setSelectedContactId }) =>{
    console.log(details);
  

    return(
        <>
        <div>
            <h1>Details</h1>
            <h2>
                <p><b> Name:</b> <b/>{details.name}</p>
                <p> <b>Phone numer:</b> <b/>{details.phone}</p>
                <p> <b>Username: </b> <b/>{details.username}</p>
                <p> Addres</p>
                <p> <b>Street:</b> <b/> {details.address.street}</p>
                <p><b> Suite: </b> <b/>{details.address.suite}</p>
                <p> <b>City:</b> <b/> {details.address.city}</p>
                <p> Work Data</p>
                <p> <b>Company Name: </b> <b/>{details.company.name}</p>
                <p> <b>Company email: </b> <b/>{details.email}</p>
                <p><b> Website: http://</b> <b/>{details.website}</p>

            </h2> 
        </div>

        <div>
        <button onClick={ContactList}>Back</button>
        </div>

        </>
    )
    
}

export default ContactDetails
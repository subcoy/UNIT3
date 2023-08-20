import {useState, useEffect} from 'react';
import ContactRow from './ContactRow';

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

const ContactList = ({setSelectedContactId, setContactDetails}) => {
    const [contacts, setContacts] = useState([]);
    
    useEffect(()=>{
        async function fetchContacts() {
            try {
              // your fetch logic will go here
              const response =await fetch('https://jsonplaceholder.typicode.com/users');
              const parsedResponse= await response.json()
              setContacts(parsedResponse);

            } catch (error) {
              console.error(error);
            }
          }
          fetchContacts()
    },[]);

    return(
      <>      
          <table>
          <thead>
            <tr>
              <th className= "title" colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td >Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
              
              contacts.map((contact) =>{
                  return(
                      <ContactRow  setContactDetails={setContactDetails} setSelectedContactId={setSelectedContactId} key={contact.id} contact= {contact}/>
                  )
              })
            }
          </tbody>
        </table>
      
        </>

    )

}
export default ContactList
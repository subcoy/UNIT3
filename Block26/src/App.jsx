
import { useState } from 'react'
import './App.css'
import ContactList from './Components/ContactList'
import ContactDetails from './Components/ContactDetails'


function App() {
  const [selectedContactId, setSelectedContactId ] = useState(null)
  const [contactDetails, setContactDetails] = useState(null)
  

  return (
    <>
    {
      selectedContactId ? <ContactDetails details={contactDetails} /> : <ContactList  setContactDetails={setContactDetails} setSelectedContactId={setSelectedContactId}/>
      
    }
      
    </>
  )
}

export default App

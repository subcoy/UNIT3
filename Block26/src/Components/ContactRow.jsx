const contactRow = ({contact, setSelectedContactId, setContactDetails}) =>{
   
    return(
        <tr onClick={()=>{
            setSelectedContactId (contact.id)
            setContactDetails(contact)
            }} >
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            
        </tr>

    )
}
export default contactRow;
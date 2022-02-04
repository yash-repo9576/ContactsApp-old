import React, {useEffect, useState} from 'react';
import Header from './Header';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const getContactHandler = async () => {
    const response = await fetch('http://localhost:4000/api/contact/');
    const fetchedContacts = await response.json();
    setContacts(fetchedContacts);
  }

  const addContactHandler = async (contact) => {
    const response = await fetch('http://localhost:4000/api/contact/add', {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(contact)
    })
    const data = await response.json();
    console.log(data);
    getContactHandler();
  }

  const removeContactHandler = async (id) => {
    const response = await fetch('http://localhost:4000/api/contact/remove', {
      headers: {
        "Content-type": "application/json"
      },
      method: "DELETE",
      body: JSON.stringify({
        contactId: id,
      })
    })
    const data = await response.json();
    console.log(data);
    getContactHandler();
  }

  const updateContactHandler = async (reqBody) => {
    const id = reqBody.id;
    const updatedContact = reqBody.contact;
    console.log(id);
    console.log(updatedContact);
    const response = await fetch('http://localhost:4000/api/contact/update', {
      headers: {
        "Content-type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({
        contactId: id,
        name: updatedContact.name,
        phone: updatedContact.phone,
        email: updatedContact.email
      })
    })
    const data = await response.json();
    console.log(data);
    getContactHandler();
  }

  // Read All Contacts
  useEffect(()=>{
    getContactHandler();
  },[])

  return (
    <div className="pb-2 bg-slate-200 h-screen"> 
      <Header addContactHandler={addContactHandler} /> 
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler} updateContactHandler={updateContactHandler} /> 
    </div>
  );
}

export default App;

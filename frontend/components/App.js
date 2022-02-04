import React, {useEffect, useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import UpdateContact from './UpdateContact';

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

  const updateContactHandler = async ({ id, contact }) => {
    console.log(id);
  }

  // Read All Contacts
  useEffect(()=>{
    getContactHandler();
  },[])

  return (
    <div className="pb-2 bg-slate-200 h-screen"> 
      <Header /> 
      <div className="mx-4 flex justify-items-center">
      <div>
        <AddContact addContactHandler={addContactHandler}/>
        <UpdateContact />
      </div>
      <ContactList contacts={contacts} getContactID={removeContactHandler}/> 
      </div>
    </div>
  );
}

export default App;

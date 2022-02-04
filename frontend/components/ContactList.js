import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const deleteContact = (id) => {
        props.removeContactHandler(id);
    };
    const editContact = (id) => {
        props.updateContactHandler(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return(
            <div key={contact.id}>
            <ContactCard contact={contact} clickDeleteHandler={deleteContact} clickUpdateHandler={editContact}></ContactCard>
            </div>
        );
    });
    return (
        <div className="px-8 py-4 max-w-lg mx-auto my-4 bg-white rounded-lg shadow-lg">
            <h2 className="pb-4 text-xl font-medium border-b-2 border-slate-200">Your Contacts</h2>
            {renderContactList}
        </div>
    )
};

export default ContactList;
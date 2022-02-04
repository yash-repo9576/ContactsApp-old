import React, { useState } from "react"
import UpdateContact from "./UpdateContact";

const ContactCard = (props) => {
  const [showUpdatebox, setShowUpdateBox] = useState(false);
  const {_id, name, email, phone} = props.contact;
  
  return(
    <div className="p-6 max-w-lg mx-auto my-4 bg-slate-100 rounded-lg shadow-lg flex items-center justify-around">
      <div className="shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      </div>  
      <div>
        <div className="text-xl font-medium text-black">{name}</div>
          <p className="text-slate-500">{email}</p>
          <p className="text-slate-500">{phone}</p>
      </div>
      <button onClick={() => setShowUpdateBox(true)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      </button>
      <button onClick={() => props.clickDeleteHandler(_id)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      </button>
      { showUpdatebox ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-3xl my-6 mx-auto max-w-3xl">
            <UpdateContact contact={props.contact} UpdateHandler={props.clickUpdateHandler} setShowUpdateBox={setShowUpdateBox} />
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ContactCard;
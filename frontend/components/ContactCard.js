import React from "react"

const ContactCard = (props) => {
  const {_id, name, email, phone} = props.contact;
  // console.log(_id);
  return(
    <div className="p-6 max-w-md mx-auto my-4 bg-slate-100 rounded-lg shadow-lg flex items-center justify-around">
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
      <button onClick={() => props.clickHandler(_id)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      </button>
    </div>
  );
};

export default ContactCard;
import React, { useState } from 'react';

const UpdateContact = (props) => {
  const [contact, setContact] = useState(props.contact);
  const update = (e) => {
    if(contact.name==="" || contact.email==="" || contact.phone==="") {
      alert("All fields are Mendatory!");
      return
    }
    props.UpdateHandler({
      id: props.contact._id,
      contact
    });
    props.setShowUpdateBox(false);
  }
  return (
    <div className="px-8 py-4 max-w-md mx-auto my-4 bg-white rounded-lg shadow-lg">
      <h2 className="pb-4 text-xl font-medium border-b-2 border-slate-200">Update Contact</h2>
      <div className="p-6 max-w-md mx-auto my-4 bg-slate-200 rounded-lg shadow-lg">
        <form onSubmit={update}>
          <div className="m-2 flex justify-around">
            <div>
              <div className="py-2">
                <label className="mx-2 pr-1 text-center font-medium">Name</label>
                <input className="pl-2 border-2 border-slate-300 rounded-md" type="text" name="name" placeholder="Name" value={contact.name} onChange={(e)=>setContact({name: e.target.value})}/>
              </div>
              <div className="py-2">
                <label className="mx-2 pr-2 text-center font-medium">Email</label>
                <input className="pl-2 border-2 border-slate-300 rounded-md" type="text" name="email" placeholder="Email" value={contact.email} onChange={(e)=>setContact({email: e.target.value})}/>
              </div>
              <div className="py-2">
                <label className="mx-2 text-center font-medium">Phone</label>
                <input className="pl-2 border-2 border-slate-300 rounded-md" type="text" name="phone" placeholder="Phone Number" value={contact.phone} onChange={(e)=>setContact({phone: e.target.value})}/>
              </div>
            </div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateContact;
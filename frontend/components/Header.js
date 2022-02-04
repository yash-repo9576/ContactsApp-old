import React, { useState } from "react";
import AddContact from './AddContact';

const Header = ( props ) => {
  const [showAddbox, setShowAddBox] = useState(false);
  
  return (
    <div className="bg-slate-500 h-12 py-2 flex justify-between">
      <h2 className="text-slate-200 text-xl font-semibold uppercase pl-6 ">Contact Manager</h2>
      <button className="text-slate-200 text-xl font-semibold uppercase pr-6 " type="button" onClick={() => setShowAddBox(true)}>Add Contact</button>
      { showAddbox ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-3xl my-6 mx-auto max-w-3xl">
            <AddContact addContactHandler={props.addContactHandler} setShowAddBox={setShowAddBox} />
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
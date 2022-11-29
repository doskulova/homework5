import React, {useState} from 'react';


function ContactsPage() {
    const[contacts, setContacts]=useState('')
    const changeContacts=(event)=>{
        setContacts(event.target.value)
    }
    const addContacts=()=>{
       console.log(contacts)
        setContacts('')
    }
    const deleteContacts=()=>{
        setContacts('')
    }
    return (
        <div>
            <input type="text"
                   onChange={changeContacts}
                   value={contacts}
            />
            <button onClick={addContacts}>add</button>
            <button onClick={deleteContacts}>clear</button>
        </div>
    );
}

export default ContactsPage;
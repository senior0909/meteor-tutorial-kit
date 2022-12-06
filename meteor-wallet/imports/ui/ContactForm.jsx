import React, { useState } from "react";
import { ContactCollection } from "../api/ContactCollection";

export const ContactForm = () =>{

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [imageUrl, setImageUrl] = useState();

    const saveContact = () => { 
        ContactCollection.insert({name, email, imageUrl});

        setName('');
        setEmail('');
        setImageUrl('');
    }

    return (
        <form action=""> 
            <div>
                <label htmlFor="name">Name</label>
                <input 
                        type="text" 
                        id='name' 
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
            </div> 
            <div>
                <label htmlFor="email">Email</label>
                <input 
                        type="text" 
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="imageUrl">Image Url</label>
                <input 
                        type="text" 
                        id='imageUrl'
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)}  />
            </div>
            <div>
                <button id='save' type="button" onClick={saveContact}>Save</button>
            </div>
            
        </form> 
    )
}

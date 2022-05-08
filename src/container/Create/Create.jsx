import React from "react";
import { useState } from "react";
 import { db } from "../../firebase";

import './Create.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
          const blog = { title, body, author };
         
         db.collection('contacts').add({
             title: title,
             body: body,
             author: author,
         })
         .then(() => {
             alert('Message has been submitted')
         })
         .catch((error) => {
             alert(error.message)
         });

         setTitle("");
         setBody("");
         setAuthor("");
    };

    return (
        <div className="app__bg_create create_div_base create_div_padding" id="plan-your-arrival">
            <h2 className="create_headtext_style">Plan Your Arrival</h2>
            <form onSubmit={handleSubmit} className="create_form_style">
                <label className="create_label_style">Arrival Date:</label>
                <input className="create_input_style" placeholder="Yacht Name"
                    type='date'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="create_label_style" >Yacht Infos:</label>
                <textarea className="create_textarea_style" placeholder="Yacht Name/Flag/Meters"
                     required
                     value={body}
                     onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className="create_label_style" >Your Contact:</label>
                <textarea className="create_textarea_style" placeholder="Contact Number/Email Adress"
                     required
                     value={author}
                     onChange={(e) => setAuthor(e.target.value)}
                ></textarea>
                {/* <label className="create_label_style">Blog author:</label>
                <select className="create_select_style"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select> */}
                <button type="submt" className='create_button_style'>Send Request</button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}

export default Create;
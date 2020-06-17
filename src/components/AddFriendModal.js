import React, { useState } from 'react';
import {GrClose} from 'react-icons/gr';

const AddFriendModal = (props) => {
    const [friendEmail, setFriendEmail] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
    }
    
    const closeModal = () => {
        props.modalRef.current.style.display="none";
    }

    return (
        <div className="modal_content" ref={props.modalRef}>
            <div className="modal_container">
                <div className="modal_header">
                    <h3>Type an email of your friend</h3>
                    <span onClick={closeModal}><GrClose/></span>
                </div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Email" name="email" type="email" onChange={e => setFriendEmail(e.target.value)} value={friendEmail}></input>
                    <button type="submit">Add to Friends List</button>
                </form>
            </div>
        </div>
    )
}
export default AddFriendModal;
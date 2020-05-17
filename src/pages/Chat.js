import React, { useState, useEffect } from 'react';
import {auth, db} from '../services/firebase';
import {signOutUser} from '../helpers/auth'
const Chat = () => {
    const [user, setUser] = useState(auth().currentUser);
    const [chats, setChats] = useState([]);
    const [content, setContent] = useState('');
    const [readError, setReadError] = useState(null);
    const [writeError, setWriteError] = useState(null);

    useEffect(() => {
        try {
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                setChats(chats);
            });
        } catch (error) {
            setReadError(error.message);
        }
    }, []);

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setWriteError(null);
        try {
            await db.ref("chats").push({
                content: content,
                timestamp: Date.now(),
                uid: user.uid
            });
            setContent('');
        }catch (error) {
            setWriteError(error.message)
        }
    }

    const userSignOut = async() => {
        try{
            await signOutUser();
        }catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className="chats">
                {chats.map(chat => {
                return <p key={chat.timestamp}>{chat.content}</p>
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={content}/>
                <button type="submit">Send</button>
            </form>
            <div>
                Login in as: <strong>{user.email}</strong>
                <button onClick={userSignOut}>Sign out</button>
            </div>
        </div>
    )
} 

export default Chat;
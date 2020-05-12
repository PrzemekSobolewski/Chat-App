import React, { useState, useEffect } from 'react';
import {auth, db} from '../services/firebase';

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
    }, [])

    return (
        <div>
            <div className="chats">
                {chats.map(chat => {
                return <p key={chat.timestamp}>{chat.content}</p>
                })}
            </div>
            <div>
                Login in as: <strong>{user.email}</strong>
            </div>
        </div>
    )
} 

export default Chat;
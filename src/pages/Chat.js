import React, { useState, useEffect, useRef} from 'react';
import {auth, db} from '../services/firebase';
import {signOutUser} from '../helpers/auth'
import AddFriendModal from '../components/AddFriendModal';

const Chat = () => {
    const [user, setUser] = useState(auth().currentUser);
    const [friend, setFirend] = useState('friendId')
    const [chats, setChats] = useState([]);
    const [content, setContent] = useState('');
    const [readError, setReadError] = useState(null);
    const [writeError, setWriteError] = useState(null);
    const userRef = db.ref(`users`).child(auth().currentUser.uid);
    const modalRef = useRef();
    useEffect(() => {
        userRef.on("value", snapshot => {
            if(snapshot.exists()) {
                console.log("user is already in database")
            }else {
                try { 
                    userRef.set({
                        uemail: auth().currentUser.email
                    })
                }catch(error) {
                    console.log(error)
                }
            }
        })
        
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
                uid: user.uid,
                friend: 'friendId' 
            });
            setContent('');
        }catch (error) {
            setWriteError(error.message)
        }
    }

    const userSignOut = async() => {
        try {
            await signOutUser();
        }catch (error) {
            console.log(error.message);
        }
    }

    const openAddFriendModal = () => {
        modalRef.current.style.display = "block"; 
    }

    return (
        <div className="chat_page">
            <div className="chat_page-content">
                <div className="chat_user-actions">
                    <div className="chat_user-options">
                        <p onClick={openAddFriendModal}>Add friends</p>
                        <p>Settings</p>
                        <p>My account</p>
                    </div>
                    <div className="chat_user-friends">
                        <header>Friends</header>
                        <p>first friend</p>
                        <p>second friend</p>
                    </div>
                </div>
                <div className="chat_chat-content">
                    <div className="chat_chat-container">
                        {chats.map(chat => {
                            if(chat.uid === user.uid){ // todo
                                return <p key={chat.timestamp}>{chat.content}</p>
                            } else if (readError) {
                                return <p>failed to load messages</p>;
                            } else {
                                return null
                            }
                        })}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={content}/>
                        <button type="submit">Send</button>
                    </form>
                    <div className="chat_chat-login-info">
                        <span>Login as: <strong>{user.email}</strong></span>
                    </div>
                </div>
                <div className="chat_chat-sign-out">
                    <button onClick={userSignOut}>Sign out</button>
                </div>
            </div>
            <AddFriendModal modalRef={modalRef}/>
        </div>
    )
} 

export default Chat;
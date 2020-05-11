import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {signin} from '../helpers/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signin(email, password) 
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className="loginPage">
            <div className="loginContent">
                <form className="loginForm" onSubmit={handleSubmit} >
                    <h1>
                        Login to <Link to="/">ChatApp</Link>
                    </h1>
                    <div>
                        <input className="loginEmail" placeholder='Email' name='email' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <input className="LoginPassword" placeholder='Password' name='password' type='password' onChange={e => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div>
                        <button type="submit">Log in</button>
                    </div>
                    <div>
                        <h5>Do not have an account? <Link to="/signup">Sign up</Link></h5>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
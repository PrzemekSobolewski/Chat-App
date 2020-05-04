import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {singin} from '../helpers/auth';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>
                    Sign up to <Link to="/">ChatApp</Link>
                </h1>
                <div>
                    <input placeholder='Email' name='email' type='email' onChange={handleChange} value={email}/>
                </div>
                <div>
                    <input placeholder='Password' name='password' type='password' onChange={handleChange} value={password}/>
                </div>
                <div>
                    <button type="submit">Sign up</button>
                </div>
                <div>
                    <h5>Already have an account? <Link to="/login">Login</Link></h5>
                </div>
            </form>
        </div>
    );
}

export default LogIn;
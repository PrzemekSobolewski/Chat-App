import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {signup, signInWithGoogle} from '../helpers/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = async (e) => {
        setEmail(e.target.value);
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password);
        } catch (error) {
            console.log(error);
        }
    }
    
    const googleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>
                    Sign up to <Link to="/">ChatApp</Link>
                </h1>
                <div>
                    <input placeholder='Email' name='email' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <input placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <button type="submit">Sign up</button> or <button onClick={googleSignIn}>Sign up with Google</button>
                </div>
                <div>
                    <h5>Already have an account? <Link to="/login">Login</Link></h5>
                </div>
            </form>
        </div>
    );
}

export default SignUp;